import React from "react";
import {Breadcrumb} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import history from './history';
import pageName from './pageName';

export default class RouterBreadcrumb extends React.Component {

  backNav(){
    history.goBack();
  }

  render() {
    const paths = history.location.pathname.split('/');
    paths.shift();

    console.log(paths.slice(0, -1));

    const routes = paths.slice(0, -1).map((item, index) =>
      <LinkContainer key={index} to={`/${item}`}>
        <Breadcrumb.Item>{pageName[item] || item}</Breadcrumb.Item>
      </LinkContainer>
    );

    const lastItemName = paths.pop();
    const lastRoute =
      <Breadcrumb.Item active>{pageName[lastItemName] || lastItemName}</Breadcrumb.Item>;

    return (
      <Breadcrumb>
        <Breadcrumb.Item onClick={this.backNav.bind(this)}>&lt;</Breadcrumb.Item>
        <LinkContainer to="/">
          <Breadcrumb.Item>主页</Breadcrumb.Item>
        </LinkContainer>
        {routes}
        {lastRoute}
      </Breadcrumb>
    )
  }
}
