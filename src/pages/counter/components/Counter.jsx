/*
 * @Author: hiyan 
 * @Date: 2020-11-02 18:03:45 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-03 10:57:28
 */
import { connect } from "dva"
import { Button } from "antd"

const mapStateToProps = state => {
    return {
        count: state.counter.count, // state是全局对象，用state.namespace去获取特定对象，再用.count获取特定数值
    }
}

const Counter = (props) => {
    const { count, dispatch } = props; // 经过connect后，自动将组件绑定到dispatch

    const handleIncreaseBtn = () => {
       dispatch({
            type: 'counter/increase', // namespace/reducers中方法
            payload: { val: 3}
        })
    };

    const handleDecreaseBtn = () => {
        dispatch({
            type: 'counter/decrease',
            payload: { val: 1}
        })
    };
    return(
        <div className="Counter">
            {/* <h1>当前计时器值是： </h1> */}
            <Button onClick={handleIncreaseBtn}>+</Button>
            <h2>{props.count}</h2>
            <Button onClick={handleDecreaseBtn}>-</Button>
       </div>
    )
 }
 
 export default connect(mapStateToProps)(Counter);
 