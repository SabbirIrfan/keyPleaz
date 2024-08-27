
import {BUY_CAKE} from './cakeTypes';
const initailstate = {
    numberOfCakes : 10
}

const cakeReducer = (state = initailstate, action) =>{
    console.log(state)
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes : state.numberOfCakes - 1
        }
        default: return state
    }
}
export default cakeReducer;