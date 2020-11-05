export default {
    namespace: 'card',
    state: {
        counter: 100, // 用于key
        initCardList: [
            {
              id: 1,
              setup: 'Did you hear about the two silk worms in a race?',
              punchline: 'It ended in a tie',
            },
            {
              id: 2,
              setup: 'What happens to a frog\'s car when it breaks down?',
              punchline: 'It gets toad away',
            },          
        ],
    },
    reducers: {
      addCard( state, action ){
        console.log("reducers");
        const initCardList = [...state.initCardList];
        const newCounter = state.counter +1;
        const newCard = action.payload.val;
        const newCardWithId={...newCard,id: newCounter};
        return{
          ...state,
          initCardList: [...initCardList,newCardWithId],
          counter: newCounter
        }
      }
    }
}