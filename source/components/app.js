import React from "react";
import {connect} from "react-redux";
import {Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import TreasureValueAndType from './TreasureValueAndType'

export class app extends React.Component {
    render() {
        console.warn(...this.props);
        return (
            <div>
                <Navbar fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#"><img src="img/MonsterAdvancerTitle.png" alt="monster advancer logo"/></a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>

                <Grid componentClass="main" fluid={true}>
                    <Row className="show-grid">
                        <Col md={6}>
                            <section className="panel panel-info">
                                <header className="panel-heading panel-sm"><h3 className="panel-title">Ultimate Equipment Treasure Generator</h3></header>
                                <div className="panel-body">
                                    <TreasureValueAndType {...this.props}/>
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="panel panel-info">
                                <header className="panel-heading panel-sm"><h3 className="panel-title">Right Panel</h3></header>
                                <div className="panel-body">
                                    SECONDARY CONTENT
                                </div>
                            </section>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => (state);

const App = connect(mapStateToProps)(app);

export default App;
export {mapStateToProps};