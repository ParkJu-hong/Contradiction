import initalState from './initialState';

export function reducerViewDetail(state = initalState, action){
    switch(action.type){
        case 'CHANGE_VIEWDETAIL': 
            return Object.assign({}, state, {seletedPicture: action.payload.src});
        default:
            return state;
    }
}