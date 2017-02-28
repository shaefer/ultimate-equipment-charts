import * as Actions from './action-types'

export const treasureValueChangeHandler = (event) => {
    return (dispatch, getState) => {
        let newVal = event.target.value;
        console.log("Treasure value Change event fired: value: " + newVal);
        if (newVal)
            newVal = parseInt(newVal, 10);
        dispatch({
            type: Actions.TREASURE_VALUE_CHANGED,
            value: newVal
        });
    }
};

export const treasureTypeSelectHandler = (event) => {
    return (dispatch, getState) => {
        console.log("Treasure Type change event fired--new value: " + event.target.checked + " checkbox letter: " + event.target.value);
        dispatch({
            type: Actions.TREASURE_TYPE_CHANGED,
            checked: event.target.checked,
            treasureType: event.target.value
        });
    }
};
