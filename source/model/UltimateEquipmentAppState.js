import TreasureType from './TreasureType'
export default class UltimateEquipmentAppState {
    constructor() {
        this.treasureTypes = [
            new TreasureType("A", "Coins"),
            new TreasureType("B", "Coins and Gems"),
            new TreasureType("C", "Art Objects"),
            new TreasureType("D", "Coins and Small Objects"),
            new TreasureType("E", "Armor and Weapons"),
            new TreasureType("F", "Combatant Gear"),
            new TreasureType("G", "Spellcaster Gear"),
            new TreasureType("H", "Lair Treasure"),
            new TreasureType("I", "Treasure Hoard")
        ];
        this.treasureTypesOn = [];
        this.treasureValue = 0;
    }

    toPlainObject() {
        return {
            treasureTypes: this.treasureTypes,
            treasureValue: this.treasureValue,
            treasureTypesOn: this.treasureTypesOn
        }
    }
}