import React from "react";
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';

export default class Page extends React.Component {

  render() {
    const { match } = this.props;

    return (
      <Grid fluid={false}>
        <Row>
          <Col md={12}>
            <PageHeader>{match.params.articleTitle}</PageHeader>
            <div>
              <p>bootstrap為前端開源框架，主要把網頁常用的元件都定義出來，讓原本form、button、navbar或者layout排版更加簡潔便利。如果覺得bootstrap</p>
              <p>default還不夠美觀，可以引入其它第三方開源的theme，網路上還有商業版的theme可以付費購買使用。</p>

              <p>react-bootstrap不包含css，所以安裝完react-bootstrap需要引入css，最簡單的方式就引入bootstrap
                css最後一版就好，這樣就能使用預設的bootstrap功能。但react-bootstrap使用JSX需使用元件標籤，撰寫時先看components範例，再比對原始的bootstrap應該會比較好上手。碰上不懂的部份就先DOC複製貼上，再慢慢了解使用方法。</p>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}