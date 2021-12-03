import initalState from './initialState';

export const reducerMenu = (state = initalState, action) => {
    switch(action.type){
        case 'OPEN_MENU': 
            return Object.assign({}, state, {menu: true});
        case 'CLOSE_MENU':
            return Object.assign({}, state, {menu: false});
        case 'CLOSE_AND_CHEANGE_CATEGORY':
            return Object.assign({}, state, {menu: false, category: action.payload.category});
        default:
            return state;
    }
}
// , category: action.payload.category