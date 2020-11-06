/*
 * @Author: hiyan 
 * @Date: 2020-11-05 16:52:34 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-06 16:37:11
 */
import React, { useEffect } from 'react'
import { connect } from 'dva'
import { Card, Button, } from 'antd'

const namespace = 'card'
const mapStateToProps =  state  => { 
    console.log("mapStateToProps",state[namespace].initCardList);
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
        initCardData: () => { //此逻辑可放在models中subscriptions里，监听到pathname，执行fetch action
            dispatch({
                type: `${namespace}/fetch`,

            })
        },
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
    console.log("InfoCard",cardList.length);
    // useEffect(async () => {
    //     const result = await axios(
    //       'https://hn.algolia.com/api/v1/search?query=redux',
    //     );
     
    //     setData(result.data);
    //   });
    return(
        <div>
            <div>
                {cardList&&cardList.map((card)=>(
                    <Card key={card.id} >
                        <div>Q: {card.title}</div>
                        <div><strong>A: {card.description}</strong></div>
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