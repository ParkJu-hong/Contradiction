import initalState from './initialState';

export const reducerMenu = (state = initalState, action) => {
    switch(action.type){
        case 'OPEN_MENU': 
            return Object.assign({}, state, {menu: true});
        case 'CLOSE_MENU':
            return Object.assign({}, state, {menu: false});
        default:
            return state;
    }
}
