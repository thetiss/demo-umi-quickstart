/*
 * @Author: hiyan 
 * @Date: 2020-11-02 18:03:45 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-02 19:35:02
 */
import React, { Component } from 'react';
import { connect } from "dva"

const mapStateToProps = state => {
    console.log("state is ",state);
    return {
                count: state.counter.count
            }
        };
class Counter extends Component {

    constructor(props){
        super(props)      
        console.log("*****from props,the count is :*****",props.count);

    }  

    render (){
        return (
            <div>
                 <h1>show </h1>
                 <span>{this.props.count}</span>
            </div>
        )
    }
}
//  const Counter = (props) => {
//     console.log("*****from props,the count is :*****",props.count);
//     const mapStateToProps = state => {
//         return {
//             count: state.count
//         }
//     }
//     return(
//         <div className="Counter">
//             <h1>当前计时器值是： </h1>
//             <h2>{props.count}</h2>
//         </div>
//     )
//  }
 
 // export default connect(({ count }) => ({ count }))(Counter);
 export default connect(mapStateToProps)(Counter);

// export default () => {
//     return(
//         <div>
//             <div>
//                 <h1>首页</h1>
//             </div>
//         </div>
//     )
// }