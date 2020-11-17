/*
 * @Author: hiyan 
 * @Date: 2020-11-11 10:38:46 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-17 17:51:29
 */
import { useEffect, } from 'react'
import { Form, Modal, Input, DatePicker, Switch } from 'antd'
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { check } from 'prettier';
import moment from 'moment';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const onChange = (value, dateString) => {
    console.log(value);
    console.log(dateString);
}
const UserModal = ({ visible, record, onCancel, onCreate, }) => {
    const [ form ] = Form.useForm();
    useEffect(()=>{
        if(record === null){
            form.resetFields();
        }else{
            // console.log("in modal: ",JSON.stringify(record));
            form.setFieldsValue({                
                ...record,
                create_time: moment(record.create_time),
                status: Boolean(record.status)
            });
            //form.resetFields();
        }
    },[visible])
    return(
        <div>
            <Modal
                visible={visible}
                title={visible?'编辑用户':'新增用户'}
                okText="确定"
                cancelText="取消"
                onCancel={onCancel}
                // TODO: 新增后，点击确认，再弹出是否再新增，若是，则继续新增。当前处理是关闭当前弹出框。
                onOk={() => {
                    form.validateFields() // form instance的API方法之一：触发表单验证	
                        .then((values) => {                            
                            //form.resetFields(); // 之一：重置一组字段到 initialValues
                            onCreate(values);
                            form.resetFields();
                        })
                        .catch((errorInfo) => {
                            console.log("validateFields failed: ",errorInfo);
                        })
                }}
            >
                <Form
                    form={form}
                    {...layout}
                    name="userInfo"                                       
                >
                    <Form.Item
                        name="name"
                        label="用户名"
                        rules={[{required: true,message:'请输入用户名'}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="邮箱"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="create_time"
                        label="创建时间"
                    >
                        <DatePicker 
                            showToday 
                            showTime={{ format: 'HH:mm' }}
                            // format="YYYY-MM-DD HH:mm"
                            onChange={(date, dateString) => onChange(date, dateString)} 
                            locale={locale}
                        />
                    </Form.Item>
                    <Form.Item
                        name="status"
                        label="用户状态"
                        valuePropName="checked"
                    >
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default UserModal;