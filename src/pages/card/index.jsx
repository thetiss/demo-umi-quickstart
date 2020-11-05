/*
 * @Author: hiyan 
 * @Date: 2020-11-05 16:52:34 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-05 19:17:12
 */
import { connect } from 'dva'
import { Card, Button, } from 'antd'

const namespace = 'card'
const mapStateToProps =  state  => { 
    return{
        cardList: state[namespace].initCardList
    }
}
// 方法一
const staticNewCard = {    
    setup: 'Did you hear about the two silk worms in a race?',
    punchline: 'It ended in a tie',
}
const mapDispatchToProps = dispatch => {
    return{
        handleAddCard: (staticNewCard) => {
            dispatch({
                type: `${namespace}/addCard`,
                payload: { val: staticNewCard }
            })
        }
    }
}
const InfoCard = (props) => {
    const { cardList } = props;
    return(
        <div>
            <div>
                {cardList&&cardList.map((card)=>(
                    <Card key={card.id} >
                        <div>Q: {card.setup}</div>
                        <div><strong>A: {card.punchline}</strong></div>
                    </Card>
                ))}
            </div>
            <div>
                <Button onClick={() => props.handleAddCard(staticNewCard)}>添加Q&A卡片</Button>
            </div>            
        </div>

    )
}
export default connect(mapStateToProps,mapDispatchToProps)(InfoCard)