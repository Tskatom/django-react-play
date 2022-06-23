import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunx from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [reduxThunx];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;