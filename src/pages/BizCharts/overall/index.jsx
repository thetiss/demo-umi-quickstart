/*
 * @Author: hiyan 
 * @Date: 2020-11-19 09:51:28 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-19 15:52:24
 */
import styles from './index.css'
 const index = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>BizCharts 熟悉</h1>
            <ul>
                <li key="LineAdvance">LineAdvance</li>
                <li key="Interval">Interval(similar to bar)</li>
            </ul>
        </div>
    )
}
export default index;