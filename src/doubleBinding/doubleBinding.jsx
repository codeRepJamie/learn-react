import React from "react";
import ReactDom from "react-dom";
import Head from "./Head";

export default class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  setTitle(title){
    this.setState({
      title: title
    })
  }

  render() {
    return (
      <div>
        <Head title={this.state.title} changeTitle={this.setTitle.bind(this)}/>
      </div>
    )
  }
}