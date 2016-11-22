import * as Actions from './action-types'

export const treasureValueChangeHandler = (newVal) => {
    return (dispatch, getState) => {
        console.log("Treasure value Change event fired: value: " + newVal.value);
        dispatch({
            type: Actions.TREASURE_VALUE_CHANGED,
            value: newVal.value
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
