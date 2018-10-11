import React from "react";
import {Grid, Row} from 'react-bootstrap';
import Article from './Article';

export default class Page extends React.Component {

  constructor(props) {
    super(props);
    const { match } = this.props;

    this.state = {
      list: [
        'Conditional Rendering',
        'Element Variables',
        'Inline If with Logical && Operator',
        'Inline If-Else with Conditional Operator',
        'Preventing Component from Rendering',
        'try it on CodePen',
      ].map((item, index) => <Article key={index} title={item} match={match}/>)
    }
  }

  render() {
    const { match } = this.props;

    return (
      <Grid>
        <Row>
          {this.state.list}
        </Row>
      </Grid>
    )
  }
}