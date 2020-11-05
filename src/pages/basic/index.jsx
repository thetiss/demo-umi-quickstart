/*
 * @Author: hiyan 
 * @Date: 2020-11-05 09:55:08 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-05 14:53:08
 */
import React, { useState } from 'react';
 import { Card, Row, Col, Tree,  } from 'antd'
 export default () => {
    const picture = {
        src: 'https://zos.alipayobjects.com/rmsportal/GQJeDDeUCSTRMMg.gif',
        description: 'test is working',
    };
    const treeData = [
        {
          title: '0-0',
          key: '0-0',
          children: [
            {
              title: '0-0-0',
              key: '0-0-0',
              children: [
                {
                  title: '0-0-0-0',
                  key: '0-0-0-0',
                },
                {
                  title: '0-0-0-1',
                  key: '0-0-0-1',
                },
                {
                  title: '0-0-0-2',
                  key: '0-0-0-2',
                },
              ],
            },
            {
              title: '0-0-1',
              key: '0-0-1',
              children: [
                {
                  title: '0-0-1-0',
                  key: '0-0-1-0',
                },
                {
                  title: '0-0-1-1',
                  key: '0-0-1-1',
                },
                {
                  title: '0-0-1-2',
                  key: '0-0-1-2',
                },
              ],
            },
            {
              title: '0-0-2',
              key: '0-0-2',
            },
          ],
        },
        {
          title: '0-1',
          key: '0-1',
          children: [
            {
              title: '0-1-0-0',
              key: '0-1-0-0',
            },
            {
              title: '0-1-0-1',
              key: '0-1-0-1',
            },
            {
              title: '0-1-0-2',
              key: '0-1-0-2',
            },
          ],
        },
        {
          title: '0-2',
          key: '0-2',
        },
      ];
    return(
        <div>
            <Row gutter={18}>
                <Col span={8}>
                     <Card size="small" title="熟悉this.props.children用法" style={{ width: 300 }}>
                        <h5>Test for "this.props.children" by displaying picture with description</h5>
                        <PictureWithDescription src={picture.src}>
                        <h6>该图描述的是课程图片</h6>
                        <h6>{picture.description}</h6>
                        </PictureWithDescription>
                    </Card>                
                </Col>
                <Col span={8}>
                    <Card size="small" title="熟悉受控/不受控组件" extra={<a href="https://www.yuque.com/ant-design/course/goozth">Ref</a>} style={{ width: 300 }}>
                        <h5>通过tree</h5>
                        <LibraryOrgalizationTree treeData={treeData}/>
                    </Card>   
                </Col>
                <Col span={8}>
                    <Card  title="" extra={<a href="https://www.yuque.com/ant-design/course/goozth">Ref</a>} style={{ width: 300 }}>
                        <h5>通过tree</h5>
                    </Card>   
                </Col>
            </Row> 
        </div>
    )
 }

 export const PictureWithDescription = (props) => {
    return(
        <div>
            <img src={props.src} style={{width: '220px',height: '120px'}}/>
            {props.children}
        </div>
    )
}
// 图书馆组织关系树形图
// 默认不展开，点击后展开当前节点所有子节点
// 默认不复选
export const LibraryOrgalizationTree = (props) => {
    // 受控：选中、展开、选中复选
    const [selectedKeys,setSelectedKeys] = useState([]);
    const [expandedKeys,setExpandedKeys] = useState([]);
    // const [checkedKeys,setCheckedKeys] = useState([]);
    
    const onSelect = (selectedKeys) => {
        const currentSelectedKey = selectedKeys[0];
        const isGoingToExpandedKeys = (expandedKeys.includes(currentSelectedKey)
        ? expandedKeys.filter((key)=>key!==currentSelectedKey)
        : [...expandedKeys,currentSelectedKey]
        )
        setExpandedKeys(isGoingToExpandedKeys)        
    }
    const onExpand = (expandedKeys) => {
        console.log("expandkeys",expandedKeys); 
        setExpandedKeys(expandedKeys);
    }
    // const onCheck = () => {
    //     console.log("checkedKeys",checkedKeys);        
    //     alert("you are using checkingbox")
    // }   
    return(
        <Tree 
            //checkable
            // onCheck={onCheck}
            // checkedKeys={checkedKeys}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            treeData={props.treeData}
        />
    )
}