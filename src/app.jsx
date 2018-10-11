import React from "react";
import ReactDom from "react-dom";
import Layout from "./Layout";

import {Router, Route, Link, Switch} from 'react-router-dom';

import {Navbar, Grid, Row, Col} from 'react-bootstrap';
import Navigator from './Navigator'
import RouterBreadcrumb from './RouterBreadcrumb'

import Loadable from "react-loadable";
import Loading from "./Loading";
import history from './history';
import NotFoundPage from "./NotFoundPage";

const Detail = Loadable({
  loader: () => import("./Detail"),
  loading: Loading
});

const Api = Loadable({
  loader: () => import("./api/api"),
  loading: Loading
});

const DoubleBinding = Loadable({
  loader: () => import("./doubleBinding/doubleBinding"),
  loading: Loading
});

const Chess = Loadable({
  loader: () => import("./chess/chess"),
  loading: Loading
});

const Page = Loadable({
  loader: () => import("./page/page"),
  loading: Loading
});

const Style = Loadable({
  loader: () => import("./style/style"),
  loading: Loading
});

const ArticleDetail = Loadable({
  loader: () => import("./style/ArticleDetail"),
  loading: Loading
});

function PageMod(props) {

  const { match } = props;

  const pageModule = {
    '/detail': <Detail match={match}/>,
    '/api': <Api match={match}/>,
    '/doubleBinding': <DoubleBinding match={match}/>,
    '/chess': <Chess match={match}/>,
    '/page': <Page match={match}/>,
    '/style': <Style match={match}/>,
    '/style/:articleTitle': <ArticleDetail match={match}/>,
  };

  return pageModule[props.match.path] || <Layout/>
}

class App extends React.Component {

  renderPage({ match }) {
    return (
      <Grid fluid={false}>
        <Row>
          <Col md={12}>
            {(match.path !== '/') && <RouterBreadcrumb/>}
            <PageMod match={match}/>
          </Col>
        </Row>
      </Grid>
    )
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Navigator/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Switch>
                  <Route exact path="/" children={this.renderPage.bind(this)}/>
                  <Route path="/detail" children={this.renderPage.bind(this)}/>
                  <Route path="/api" children={this.renderPage.bind(this)}/>
                  <Route path="/doubleBinding" children={this.renderPage.bind(this)}/>
                  <Route path="/chess" children={this.renderPage.bind(this)}/>
                  <Route path="/page" children={this.renderPage.bind(this)}/>
                  <Route exact path="/style" children={this.renderPage.bind(this)}/>
                  <Route path="/style/:articleTitle" children={this.renderPage.bind(this)}/>
                  <Route component={NotFoundPage}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

ReactDom.render(
  <App/>
  , document.getElementById('app'));