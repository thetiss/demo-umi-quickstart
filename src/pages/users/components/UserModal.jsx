/*
 * @Author: hiyan 
 * @Date: 2020-11-11 10:38:46 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-11 11:39:03
 */
import { Form, Modal, Popconfirm } from 'antd'

const UserModal = ({ visible, isEdit, onCancel, onCreate, }) => {
    const [ form ] = Form.useForm();
    return(
        <div>
            <Modal
                visible={visible}
                title={isEdit?'编辑用户':'新增用户'}
                okText="确定"
                cancelText="取消"
                onCancel={onCancel}
                onOk={() => {
                    form.validateFields() // form instance的API方法之一：触发表单验证	
                        .then((values) => {                            
                            form.resetFields(); // 之一：重置一组字段到 initialValues
                            onCreate(values);
                            console.log("validateFields values: ",values);
                        })
                        .catch((errorInfo) => {
                            console.log("validateFields failed: ",errorInfo);
                        })
                }}
            >
                <Form
                    form={form}
                    
                >

                </Form>
            </Modal>
        </div>
    )
}
export default UserModal;