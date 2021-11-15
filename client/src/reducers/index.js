import { combineReducers } from "redux";
import { reducerMenu } from './reducerMenu';
import { reducerViewDetail } from './reducerViewDetail';

const rootReducer = combineReducers({
    reducerMenu, reducerViewDetail
})

export default rootReducer;
