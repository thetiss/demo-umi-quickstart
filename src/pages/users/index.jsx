/*
 * @Author: hiyan 
 * @Date: 2020-11-10 12:56:18 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-18 15:46:18
 */
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'dva'
import { Button, Popconfirm, message} from 'antd'
import ProTable  from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { addUser, editUser } from './services/users'
import UserModalForm from './components/UserModal'

const namespace = 'users';
const mapStateToProps = state => {
  console.log("What is loading ",state.loading);
  return {
    userList: state[namespace].initUserList,
    userListLoading: state.loading.models.users,
  }
}
const mapDispatchToProps = dispatch => {
  return{
    renderTableList: ()=>{
      dispatch({
        type:`${namespace}/fetch`,
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
  const { userList, renderTableList, onCreate, handleDeleteUser, userListLoading,  } = props;
  const tableRef = useRef();  
  const [visible,setVisible] = useState(false);
  const [record,setRecord] = useState(null);
  
  const onFinished = async (values) => {
    let id = 0; 
    if(record)
    id = record.id;
    let serviceFunc = null;
    if(id){
      serviceFunc = editUser;
    }else{
      serviceFunc = addUser;
    }
    const result = await serviceFunc({id,values});
    console.log("异步",result);
    if(result){
      setVisible(false);
      message.success(`${id !== 0 ? 'Edit' : 'ADD'} Successfully!`);
    }else{
      message.error(`${id !== 0 ? 'Edit' : 'ADD'} Failed!`);
    }
  }
  const onAddUser = () => {
    setVisible(true);
    setRecord(null);    
  }
  const onEditUser = (record) => {
    setVisible(true);
    setRecord(record);
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
          <a  key="edit" onClick={()=>onEditUser(row)}>
            编辑
          </a>,
          <Popconfirm 
            title={"确定删除?"+row.id}
            onConfirm={() => {  
                                handleDeleteUser(row.id);
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
                          loading={userListLoading}
                          options={{
                              density: true,
                              fullScreen: true,
                              reload: () => {},
                              setting: true,
                                }}
                          toolBarRender={() => [
                                                  <Button 
                                                    onClick={()=>onAddUser()} 
                                                    icon={<PlusOutlined />} 
                                                    type="primary"
                                                    key="add"
                                                  >新增User
                                                  </Button>
                                               ]}
                      />}
                      <UserModalForm 
                        visible={visible}                        
                        onCancel={handleCloseUserModal}
                        onCreate={onFinished}
                        record={record}
                      />
    </div>
  )
}  
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);