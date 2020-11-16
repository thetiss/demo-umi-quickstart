/*
 * @Author: hiyan 
 * @Date: 2020-11-10 12:56:18 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-16 17:40:25
 */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'dva'
import { Button, Popconfirm, } from 'antd'
import ProTable  from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import * as userService from './services/users'
import UserModalForm from './components/UserModal'

const namespace = 'users';
const mapStateToProps = state => {
  return {
    userList: state[namespace].initUserList,
  }
}
const mapDispatchToProps = dispatch => {
  return{
    renderTableList: ()=>{
      dispatch({
        type:`${namespace}/fetch`,
        //payload: { val: params }
      })
    },
    onCreate:  (values) => {
      console.log("2 Received values of form ",values);
      values && dispatch({
        type: `${namespace}/addUser`,
        payload: { val: values}
      })
    },
    handleDeleteUser: (id) => {
      id && dispatch({
              type: `${namespace}/deleteUser`,
              payload: { val: id}
            })           
    },  
  }
}

const UserListPage = (props) => {
  const { userList, renderTableList, onCreate, handleDeleteUser } = props;
  const tableRef = useRef();  
  const [visible,setVisible] = useState(false);
  const [isEdit,setIsEdit] = useState(false);
  const handleAddUser = () => {
    setVisible(true);    
  }
  const handleEditUser = (record) => {
    setVisible(true);
    setIsEdit(true);

  }
  const handleCloseUserModal = () => {
    setVisible(false)
  }
  useEffect(() => renderTableList(),[]) //页面加载时，加载从服务端获取到的数据
  const columns = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '用户ID',
      dataIndex: 'id',
      valueType: 'string',
    },
    {
      title: '用户名',
      dataIndex: 'name',
      valueType: 'string',
    },
    {
      title: '创建时间',
      key: 'since',
      dataIndex: 'create_time',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, row, _, action) => [
          <a  key="edit">
            编辑
          </a>,
          <Popconfirm 
            title="确定删除?"
            onConfirm={() => {  
                                handleDeleteUser(row.id);
                                if(tableRef){
                                  console.log("Delete operation tableRef",tableRef);
                                  tableRef.current.reload();
                                }else{
                                  console.log("Delete operation,no tableRef");
                                }
                              }}
            okText="确定"
            cancelText="取消"
            key="delete"
          >
            <a href="#" >删除{row.id}</a>
        </Popconfirm>,         
      ],
    },
  ]
  return(
    <div>      
      { userList  &&  <ProTable 
                          columns={columns}
                          dataSource={userList}
                          actionRef={tableRef}
                          rowKey="id"
                          toolBarRender={() => [
                                                  <Button 
                                                    onClick={()=>handleAddUser()} 
                                                    icon={<PlusOutlined />} 
                                                    type="primary"
                                                    key="add"
                                                  >新增User
                                                  </Button>
                                                ]}
                      />}
                      <UserModalForm 
                        visible={visible} 
                        isEdit={isEdit} 
                        onCancel={handleCloseUserModal}
                        onCreate={onCreate}
                        tableRef={tableRef}
                      />
    </div>
  )
}  
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);