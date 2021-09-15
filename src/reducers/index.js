import { combineReducers } from "redux";
// import initalState from '../dummyData/index';
const initalState = {
    menu: false,
    menus: ['Galley', 'About']
};

const reducerMenu = (state = initalState, action) => {
    switch(action.type){
        case 'OPEN_MENU': 
            return Object.assign({}, state, {menu: true});
        case 'CLOSE_MENU':
            return Object.assign({}, state, {menu: false});
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducerMenu
})

export default rootReducer;
