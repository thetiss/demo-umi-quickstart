/*
 * @Author: hiyan 
 * @Date: 2020-11-02 19:23:44 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-02 19:37:46
 */
import Counter from './components/Counter'
import CounterPureFunc from './components/CounterPureFunc'
export default () => {
    return(
        <div>
            <h1>Use counter</h1>
            <Counter />
            <CounterPureFunc />
        </div>
    )
}