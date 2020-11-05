/*
 * @Author: hiyan 
 * @Date: 2020-11-02 19:23:44 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-05 10:28:17
 */
import { Space } from 'antd'
import Counter from './components/Counter'

export default () => {

    return(
        <div className="main">
            <Space direction="vertical">
            <div className="Counter-container">
                 <Counter />
            </div>
            <div></div>
            </Space>
        </div>
    )
}
