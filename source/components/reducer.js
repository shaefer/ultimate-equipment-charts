import * as Actions from './action-types'


const reducer = (state, action) => {
    switch (action.type) {
        case Actions.TREASURE_VALUE_CHANGED:
            console.warn(`new value: ${action.value} for letter ${action.letter}`);
            const values = state.treasureTypeValues;
            const newValues = { ...values, [`${action.letter}`]: action.value};
            const newProps = {treasureTypeValues: newValues};
            return { ...state, ...newProps };
        case Actions.TREASURE_TYPE_CHANGED:
            const checked = action.checked;
            const treasureType = action.treasureType;
            const newTreasureTypesOn = [...state.treasureTypesOn];
            const indexOfTreasureType = state.treasureTypesOn.indexOf(treasureType);
            if (checked && indexOfTreasureType === -1)
                newTreasureTypesOn.push(treasureType);
            if (!checked && indexOfTreasureType !== -1)
                newTreasureTypesOn.splice(indexOfTreasureType, 1);
            console.warn(newTreasureTypesOn);
            return { ...state, treasureTypesOn:newTreasureTypesOn}
        case Actions.GENERATE_TREASURE:
            console.log("Generating treasure");
            //TODO: Decide where to actually call treasure generation?
            return state;
        default:
            return state;
    }
};

export default reducer
