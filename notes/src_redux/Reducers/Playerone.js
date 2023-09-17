const initialState = {
    name: "Ganesh",
    score: 80
}

export default function PlayeroneReducer(state=initialState, action){
    /*  PlayeroneReducer will take two different arguments state value and action
    action: it will holds two different variables one is payload and second one is type
    */

    const{type,payload}= action;
    /* type: it will works on what need to action
    payload:  if data send directly to reducer, that data state value should be modifly*/
    switch(type){
        case 'INC_PLAYERONE_SCORE': 
            return{...state, score:state.score+1};
        case 'INC_PLAYERONE_OWNSCORE': 
            return{...state, score:state.score+payload};
        case 'DEC_PLAYERONE_SCORE': 
            return{...state, score:state.score-1};
        default:
        return state;
    }
}