import TreasureType from './TreasureType'

const appState = {
  treasureTypes: [
    new TreasureType("A", "Coins"),
    new TreasureType("B", "Coins and Gems"),
    new TreasureType("C", "Art Objects"),
    new TreasureType("D", "Coins and Small Objects"),
    new TreasureType("E", "Armor and Weapons"),
    new TreasureType("F", "Combatant Gear"),
    new TreasureType("G", "Spellcaster Gear"),
    new TreasureType("H", "Lair Treasure"),
    new TreasureType("I", "Treasure Hoard")
  ],
  treasureTypesOn: [],
  treasureValue: 0
}
export default appState;
