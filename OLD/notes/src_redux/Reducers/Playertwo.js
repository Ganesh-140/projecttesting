const initialState = {
    name: "Babu",
    score: 0
}

export default function PlayertwoReducer(state=initialState, action){
    /*  PlayertwoReducer will take two different arguments state value and action
    action: it will holds two different variables one is payload and second one is type
    */

    const{type,payload}= action;
    switch(type){
        case 'INC_PLAYERTWO_SCORE': 
            return{...state, score:state.score+1};
        case 'INC_PLAYERTWO_OWNSCORE': 
               return{...state, score:state.score+payload};
        case 'DEC_PLAYERTWO_SCORE': 
            return{...state, score:state.score-1};
        default:
        return state;
    }
}