import React from "react";

class Head extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || 'welcome!'
    }
  }

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  componentDidUpdate(prevProps) {
    if (this.props.title !== prevProps.title) {
      this.setState({
        title: this.props.title || 'welcome!'
      })
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default Head;