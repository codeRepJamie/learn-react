import React from "react";
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './css.css';

export default function Article(props) {

  return (
    <Col sm={6} md={4}>
      <Link className="article-column" to={`${props.match.path}/${props.title}`}>
        <h1 className="article-column-title">{props.title}</h1>
        <p>The most popular front-end framework, rebuilt for React. React-Bootstrap currently targets Bootstrap v3. We
          are actively working on Bootstrap v4 support in ..</p>
      </Link>
    </Col>
  )
}