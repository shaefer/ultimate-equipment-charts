import * as Actions from './action-types'

export const treasureValueChangeHandler = (treasureTypeLetter, newVal) => {
    return (dispatch, getState) => {
        console.log("Treasure value Change event fired: value: " + newVal + " for letter: " + treasureTypeLetter);
        dispatch({
            type: Actions.TREASURE_VALUE_CHANGED,
            letter: treasureTypeLetter,
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

export const generateTreasure = () => {
  return (dispatch, getState) => {
    dispatch({
        type: Actions.GENERATE_TREASURE
    });
  }
};
