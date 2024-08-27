const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;

// Initial state
const initialState = {
    loading: false,
    users: [],
    error: ''
};

// Action types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
};

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            };
        default:
            return state;
    }
};

// Thunk action creator
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => dispatch(fetchUsersSuccess(users)))
            .catch(error => dispatch(fetchUsersFailure(error)));
    };
};

// Create store with thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

// Subscribe to store updates
store.subscribe(() => console.log(store.getState()));

// Dispatch the fetchUsers action
store.dispatch(fetchUsers()); // Ensure this is called correctly
