import {createStore}  from 'redux'
import cakeReducer from './cakeStore/cakeReducer'

const store = createStore(cakeReducer);

export default store;