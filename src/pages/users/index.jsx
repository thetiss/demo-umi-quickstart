/*
 * @Author: hiyan 
 * @Date: 2020-11-10 12:56:18 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-10 18:15:00
 */
import React, { useState, useEffect, } from 'react';
import { connect } from 'dva'
import ProTable  from '@ant-design/pro-table';
import * as userService from './services/users'

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
  }
}
const UserListPage = (props) => {
  const { userList,renderTableList  } = props;
  useEffect(()=>renderTableList(),[]) //页面加载时，加载数据
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
        <a href={row.url} target="_blank" rel="noopener noreferrer" key="link">
          链路
        </a>,
        <a href={row.url} target="_blank" rel="noopener noreferrer" key="view">
          查看
        </a>,
      ],
    },
  ]
  return(
    <div>
      { userList  && 
                      <ProTable 
                      columns={columns}
                      dataSource={userList}
                      // request={( params ) => props.renderTableList(params)}
                      rowKey="id"
                      // request={async ()=>{userService.fetch}}
                    />}
    </div>
  )
}  
export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);