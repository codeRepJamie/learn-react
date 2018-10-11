import React from "react";
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import {Link} from 'react-router-dom';
import pageName from "./pageName";

export default class Navigator extends React.Component {
  render() {

    const NavInfos = [
      { name: null, isExact: true },
      { name: 'detail', isExact: false },
      { name: 'api', isExact: false },
      { name: 'doubleBinding', isExact: false },
      { name: 'chess', isExact: false },
      { name: 'page', isExact: false },
      { name: 'style', isExact: false },
    ];

    const NavItems = NavInfos.map((item, index) =>
      (
        <LinkContainer key={index} to={item.name ? `/${item.name}` : '/'} exact={item.isExact}>
          <NavItem>{pageName[item.name] || item.name}</NavItem>
        </LinkContainer>
      )
    );

    return (
      <Navbar inverse staticTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React-Bootstrap</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {NavItems}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}