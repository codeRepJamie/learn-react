import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link, Switch, Prompt} from 'react-router-dom';
import {Grid, Row, PageHeader} from "react-bootstrap";
import queryString from "query-string";
import history from '../history';

class Subject extends React.Component {

  render() {
    const { match } = this.props;

    const qurey = queryString.parse(history.location.search)

    return (
      <PageHeader>
        {match.params.subject}
        <small>React.Component
          {
            qurey.abc && <i>{qurey.abc}</i>
          }
        </small>
      </PageHeader>
    )
  }
}

class PageLayout extends React.Component {

  navigate() {

    const location = {
      pathname: '/',
      state: { fromPage: true }
    };

    history.replace(location);
  }

  render() {
    const { match } = this.props;
    return (
      <Grid>
        <Row>
          <h2>123</h2>
          <div>
            <Link to={`${match.url}/sex`}>sex</Link>
            <br/>
            <Link to={`${match.url}/city`}>city</Link>
            <br/>
            <Link to={`${match.url}/America?abc=123`}>America Params</Link>
            <button onClick={this.navigate.bind(this)}>this.prop</button>
          </div>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}

export default class Layout extends React.Component {

  static messageHandler(location) {
    return location.pathname.startsWith("/detail")
      ? `Are you sure you want to go to Detail?`
      : true
  }

  render() {
    const { match } = this.props;
    console.log(this);
    return (
      <div>
        <Prompt message={Layout.messageHandler}/>
        <PageLayout match={match}>
          <Switch>
            <Route path={`${match.url}/:subject`} component={Subject}/>
          </Switch>
        </PageLayout>
      </div>
    )
  }
}