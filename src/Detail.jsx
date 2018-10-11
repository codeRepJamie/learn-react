import React from "react";
import {Route, Link, Switch} from 'react-router-dom';
import {Tabs, Tab, Row, Col, Grid} from 'react-bootstrap';

import history from './history';

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        rendering: 'Additionally, Bootstrap also includes an .mx-auto class for horizontally centering fixed-width block level content—that is, content that has display: block and a width set—by setting the horizontal margins to auto.',
        components: 'Spacing utilities that apply to all breakpoints, from xs to xl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.',
        'props-v-state': 'Assign responsive-friendly margin or padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from .25rem to 3rem.',
      }
    }
  }

  render() {
    const { match } = this.props;

    console.log(this.props);

    return (
      <div className="media">
        <Row>
          <img className="col-xs-12 col-md-3"
               src="https://cdn.auth0.com/blog/react-bootstrap:buttons.png"
               alt="bootstrap"/>
          <Col xs={12} md={9}>
            <h3>{match.params.topicId}</h3>
            <p>{this.state.content[match.params.topicId]}</p>
          </Col>
        </Row>
      </div>
    )
  }
}


export default class Detail extends React.Component {

  handleSelect(url) {
    history.push(url); //这里
  }

  render() {
    const match = this.props.match;
    console.log(this);
    return (
      <div>
        <h1>Detail</h1>
        <Tabs
          defaultActiveKey={`${match.url}/rendering`}
          id="uncontrolled-tab-example"
          onSelect={this.handleSelect.bind(this)}
        >

          <Tab eventKey={`${match.url}/rendering`} title="Rendering with React" className="nav-item"/>
          <Tab eventKey={`${match.url}/components`} title="Components"/>
          <Tab eventKey={`${match.url}/props-v-state`} title="Props v. State"/>
        </Tabs>

        <Switch>
          <Route path={`${match.url}/:topicId`} component={Topic}/>
          <Route exact path={match.url} render={() => <h2>Please select a topic.</h2>}/>
        </Switch>
      </div>
    )
  }
}