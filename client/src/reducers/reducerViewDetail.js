import initalState from './initialState';

export function reducerViewDetail(state = initalState, action){
    switch(action.type){
        case 'CHANGE_VIEWDETAIL': 
            return Object.assign({}, state, {seletedPicture: Object.assign({}, action.payload.picture)});
        default:
            return state;
    }
}