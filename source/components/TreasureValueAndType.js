import React from 'react';
import { connect } from 'react-redux';
import { treasureValueChangeHandler, treasureTypeSelectHandler, generateTreasure } from './action-creators'
import {Form, FormGroup, ControlLabel, FormControl, Checkbox, Col, Button} from "react-bootstrap";
import * as Charts from 'random-charts'

export class treasureValueAndType extends React.Component {

    constructor(props) {
      super(props);
      this.validateValues.bind(this);
      this.getTotalValueOfTreasure.bind(this);
      this.displayButton.bind(this);
      this.handleGenerateButton.bind(this);
    }

    validateValues(letter, val) {
      console.log('validate Values ' + letter + " " + val);
      val = val.match(/^\d+$/) ? parseInt(val, 10) : 0;
      console.log('New Values ' + letter + " " + val);
      this.props.treasureValueChangeHandler(letter, val);
    }

    getTotalValueOfTreasure() {
      const treasureTypesOn = this.props.treasureTypesOn;
      let total = 0;
      this.props.treasureTypes.map((treasureType) => {
          const selected = treasureTypesOn.indexOf(treasureType.letter) != -1;
          if (selected) {
            const valToAdd = this.props.treasureTypeValues[treasureType.letter];
            if (valToAdd > 0)
              total += valToAdd
          }
      });
      return total;
    }

    handleGenerateButton() {
      console.log("Form generate Button handling")
      console.log(RandomChart, TreasureTypeB);
      const TreasureTypeB = Charts.TreasureTypeB.default;
      //const GetRandomGenerator = Charts.GetRandomGenerator;
      const RandomChart = Charts.RandomChart.default;

      const treasureTypeBChart = new RandomChart(TreasureTypeB.tables);
      const resultSet = treasureTypeBChart.get();
      console.log(resultSet.toArray())
      console.log(resultSet.toString())

      this.props.generateTreasure();
    }

    displayButton() {
      if (this.getTotalValueOfTreasure() > 0) {
        return (
          <FormGroup>
            <Col sm={12}>
            <Button onClick={this.handleGenerateButton.bind(this)}>Generate Treasure</Button>
            </Col>
          </FormGroup>
        );
      }
    }

    render() {
        const treasureTypesOn = this.props.treasureTypesOn;

        return (
            <section className="panel panel-primary">
                <header className="panel-heading panel-sm">Treasure Value and Types</header>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Treasure Value</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="32000" disabled value={this.getTotalValueOfTreasure()}/>
                    </FormGroup>
                    <FormGroup>
                        { this.props.treasureTypes.map((treasureType) => {
                            const selected = treasureTypesOn.indexOf(treasureType.letter) != -1;
                            return <Checkbox inline key={treasureType.letter} selected={selected} onChange={this.props.treasureTypeSelectHandler} value={treasureType.letter}>{treasureType.letter} {treasureType.title}</Checkbox>
                        }) }
                    </FormGroup>
                </Form>
                <Form horizontal>
                  { this.props.treasureTypes.map((treasureType) => {
                      const selected = treasureTypesOn.indexOf(treasureType.letter) != -1;
                      if (selected) {
                        let amount = 0;
                        if (this.props.treasureTypeValues)
                          amount = this.props.treasureTypeValues[treasureType.letter];
                        return (
                          <FormGroup controlId={treasureType.title} key={treasureType.letter + "Value"}>
                            <Col sm={5}><FormControl type="number" value={amount} onChange={(e) => this.validateValues(treasureType.letter, e.target.value)} /></Col>
                            <Col sm={7} componentClass={ControlLabel} className="leftAlign">{treasureType.letter} - {treasureType.title} Value</Col>
                          </FormGroup>
                        );
                      }
                    })
                  }
                  { this.displayButton() }
                  <footer style={{marginBottom: '15px'}}></footer>
                </Form>
            </section>
        );
    }
}

//TODO: Hook in selectors rather than raw value pulling.
const mapStateToProps = (state) => {
    return state;
};

const mergeProps = (state, actions, ownProps) => {
    return {...state, ...actions};
};

const TreasureValueAndType = connect(
    mapStateToProps,
    { treasureValueChangeHandler, treasureTypeSelectHandler, generateTreasure }, //action creators rather than mapDispatchToProps
    mergeProps
)(treasureValueAndType);

export default TreasureValueAndType;
