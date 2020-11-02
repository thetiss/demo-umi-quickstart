/*
 * @Author: hiyan 
 * @Date: 2020-11-02 18:03:45 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-02 19:40:37
 */
import { connect } from "dva"

const mapStateToProps = state => {
    return {
        count: state.counter.count
    }
}

const CounterPureFunc = (props) => {
     console.log("*****from props,the count is :*****",props);

    return(
        <div className="Counter">
            <h1>当前计时器值是： </h1>
            <h2>{props.count}</h2>
        </div>
    )
 }
 
 export default connect(mapStateToProps)(CounterPureFunc);
 