import React from 'react';
import { connect } from 'react-redux';
import { treasureValueChangeHandler, treasureTypeSelectHandler } from './action-creators'
import {Form, FormGroup, ControlLabel, FormControl, Checkbox} from "react-bootstrap";

export class treasureValueAndType extends React.Component {
    render() {
        const treasureTypesOn = this.props.treasureTypesOn;
        return (
            <section className="panel panel-primary">
                <header className="panel-heading panel-sm">Treasure Value and Types</header>
                <Form inline >
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Treasure Value</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="32000" onChange={this.props.treasureValueChangeHandler} value={this.props.treasureValue}/>
                    </FormGroup>
                    <FormGroup>
                        { this.props.treasureTypes.map((treasureType) => {
                            const selected = treasureTypesOn.indexOf(treasureType.letter) != -1;
                            return <Checkbox inline key={treasureType.letter} selected={selected} onChange={this.props.treasureTypeSelectHandler} value={treasureType.letter}>{treasureType.letter} {treasureType.title}</Checkbox>
                        }) }
                    </FormGroup>
                </Form>
            </section>
        );
    }
}

//TODO: Hook in selectors rather than raw value pulling.
const mapStateToProps = (state) => {
    return {
        treasureTypes: state.treasureTypes,
        treasureValue: state.treasureValue,
        treasureTypesOn: state.treasureTypesOn
    }
};

const mergeProps = (state, actions, ownProps) => {
    return {...state, ...actions};
};

const TreasureValueAndType = connect(
    mapStateToProps,
    { treasureValueChangeHandler, treasureTypeSelectHandler}, //action creators rather than mapDispatchToProps
    mergeProps
)(treasureValueAndType);

export default TreasureValueAndType;