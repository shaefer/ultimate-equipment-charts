import * as Actions from './action-types'
const reducer = (state, action) => {
    switch (action.type) {
        case Actions.TREASURE_VALUE_CHANGED:
            return { ...state, treasureValue: action.value };
        case Actions.TREASURE_TYPE_CHANGED: {
            const checked = action.checked
            const treasureType = action.treasureType
            const newTreasureTypesOn = [...state.treasureTypesOn]
            const indexOfTreasureType = state.treasureTypesOn.indexOf(treasureType)
            if (checked && indexOfTreasureType == -1)
                newTreasureTypesOn.push(treasureType)
            if (!checked && indexOfTreasureType != -1)
                newTreasureTypesOn.splice(indexOfTreasureType, 1)
            console.warn(newTreasureTypesOn)
            return { ...state, treasureTypesOn:newTreasureTypesOn}
        }
        default:
            return state;
    }
};

export default reducer