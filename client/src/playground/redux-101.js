import {createStore} from 'redux';

//Action Generators return Action Objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({ setTo }) => ({
    type: "SET",
    setTo
});

const resetCount = () => ({
    type: "RESET",
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setTo
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }    
};

const store = createStore();

const unsubscribe = store.subscribe(() => {
    console.log(store.getState().count);
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ setTo: 101 }));



