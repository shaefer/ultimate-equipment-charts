import * as Actions from './action-types'
const reducer = (state, action) => {
    switch (action.type) {
        case Actions.TREASURE_VALUE_CHANGED:
            return { ...state, treasureValue: action.value };
        default:
            return state;
    }
};

export default reducer