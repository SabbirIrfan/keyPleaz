const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combinereducer = redux.combineReducers
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'
const SET_CITY = 'SET_CITY'
const initialCityState = {
    name: 'Dhaka',
}
const initialState = {
    numberOfCakes: 10,
    numOfIceCream: 10
}


//ACTION
// every action has a type
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First action'
    } 

}
function buyIceCream(numberOfCakes) {
    return {
        type: BUY_ICE_CREAM,
        info: numberOfCakes
    }
}

function setCity(newName){
    return {
        type: SET_CITY,
        info: newName
    }
}


const cityReducer = (state = initialCityState, action) => { 
    switch(action.type) {
        case SET_CITY: return {
            ...state,
            name: action.info
        }
        default: return state
    }
}

// Reducer

const reduser =(state = initialState , action)=>{
    switch(action.type)  {
        case BUY_CAKE: return {
            
               ...state,
                numberOfCakes : state.numberOfCakes - 1
            
        }
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}
const myLogger = store => next => action => {
    console.log('Middleware: Dispatching', action);
    const result = next(action); // This passes the action to the next middleware or reducer
    console.log('Middleware: Next state', store.getState());
    return result; // This is useful if the next middleware or the reducer returns something
}
const rootStore = combinereducer({
    store: reduser,
    cityStore : cityReducer
})
const store = createStore(rootStore, applyMiddleware(myLogger))
const cityStore = createStore(cityReducer)


const unsubscribe = store.subscribe(()=> {
  {}
})
// what does this do?

const cityUnsubscribe = cityStore.subscribe(()=> {})


cityStore.dispatch(setCity('Chittagong'))


store.dispatch(buyCake());

store.dispatch(buyIceCream(4));

// unsubscribe();
// console.log(store.getState())

// console.log(cityStore.getState())

// dispatch >> i need a store an action

// store >> i need a reducer 
// reducer >> i need a state and an action