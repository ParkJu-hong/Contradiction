import { combineReducers } from "redux";
import { reducerMenu } from './reducerMenu';
import { reducerViewDetail } from './reducerViewDetail';
import { reducerForAjax } from './reducerForAjax';

const rootReducer = combineReducers({
    reducerMenu,
    reducerViewDetail,
    reducerForAjax 
})

export default rootReducer;
