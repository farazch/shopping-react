import { createStore, Store } from "redux";
import  reducers from './reducers/index';


//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    

const store = createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // first argument is combined reducers , second argument is the state

//const store = createStore(reducers,{}, composeEnhancers); // first argument is combined reducers , second argument is the state

export default store;