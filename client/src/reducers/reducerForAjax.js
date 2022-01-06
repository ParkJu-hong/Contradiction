import initalState from './initialState';

export const reducerForAjax = (state = initalState, action) => {
    switch (action.type) {
        case 'SPRING':
            return Object.assign({}, state, { seletedComponetforajax: 'Springforajax' });
        case 'SUMMER':
            return Object.assign({}, state, { seletedComponetforajax: 'Summerforajax' });
        case 'AUTUMN':
            return Object.assign({}, state, { seletedComponetforajax: 'Autumnforajax' });
        case 'WINTER':
            return Object.assign({}, state, { seletedComponetforajax: 'Winterforajax' });
        case 'POINT':
            return Object.assign({}, state, { seletedComponetforajax: 'Pointforajax' });
        default:
            return state;
    }
}
// , category: action.payload.category