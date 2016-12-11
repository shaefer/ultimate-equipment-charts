import {expect} from 'chai';
import deepFreeze from 'deep-freeze'
import reducer from '../../source/components/reducer'
import Chance from 'chance'
import * as Actions from '../../source/components/action-types'

describe('Reducer', () => {
    const chance = new Chance();

    it('should change treasureValue TREASURE_VALUE_CHANGED action', () => {
        const beforeState = {
            treasureValue: chance.integer()
        };

        const newTreasureValue = chance.integer();
        const afterState = {
            treasureValue: newTreasureValue
        };

        deepFreeze(beforeState);
        const action = {type: Actions.TREASURE_VALUE_CHANGED, value: newTreasureValue};
        expect(reducer(beforeState, action).treasureValue).to.equal(afterState.treasureValue);
    });
});