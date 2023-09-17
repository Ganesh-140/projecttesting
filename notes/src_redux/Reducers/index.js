import {combineReducers} from 'redux';
import PlayeroneReducer from './Playerone';
import PlayertwoReducer from './Playertwo';

/* we are wraping two reducers (playerone and playertwo) */

const reducer = combineReducers({
    playerone: PlayeroneReducer,
    playertwo: PlayertwoReducer
})

export default reducer;