import * as cardService from '../services/card'

export default {
    namespace: 'card',
    state: {
        counter: 100, // 用于key
        initCardList: [],
    },
    reducers: {      
      save( state, action ){ //action.payload{val: []} 约定是[]的好处是不用判断是update单个对象。
        const initCardList = [...state.initCardList];
        // const newCounter = state.counter +1;
         const newCard = action.payload.val; 
        // console.log(Array.isArray(newCard));
        // console.log([...initCardList,newCard]);
        // console.log([...initCardList,newCard].length);
        // const newCardWithId={...newCard,id: newCounter};
        const newCardList = initCardList.concat(newCard);
        return{
          ...state,
          initCardList: newCardList,
        }
      }
    },
    effects: {
      *fetch(action, { call, put }){
        console.log("effect fetch is here");
        console.log(action);
        const { data, headers } = yield call(cardService.fetch);
        console.log("data", data);
        console.log(data.length);
       // console.log("effect fetch is here",carData);
        yield put({
          type: 'save',
          payload: { val: data}
        })
      }
    },
    subscriptions: {
      setup({ dispatch, history }){
        return history.listen(({ pathname, query}) => {
          console.log("*****subscriptions*******");
          console.log("***pathname",pathname);
          if(pathname === '/card'){
            dispatch({
              type: 'fetch',
            })
          }
        })
      }
    }
}