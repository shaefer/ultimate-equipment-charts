# ultimate-equipment-charts

A small project to create a UI for the generation of treasure based on the method described in the 
[Pathfinder Ultimate Equipment](http://paizo.com/pathfinderRPG/prd/ultimateEquipment/appendix.html) 
guide. Uses the [random-charts](https://github.com/shaefer/random-charts) library for the table 
data and rolling.

Uses ES6 (Babel), React, Redux(immutable state, action creators, thunk), Webpack

Tests
* npm test (uses mocha and chai and deep-freeze for testing for state mutation)

## Setup
* Assumes node installed
* npm install
* npm start (babel, webpack, webpack-dev-server)