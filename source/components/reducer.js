import * as Actions from './action-types'
const reducer = (state, action) => {
    switch (action.type) {
        case Actions.NAME_PICKED:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};

export default reducer