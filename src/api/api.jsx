import React from 'react';
import ReactDom from 'react-dom';

export default class MyTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'haha'
    }
  }

  /*static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return { text: 'derived' }
  }*/

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    //this.setState()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log(prevState.text, this.state.text);
  }

  render() {
    const { text } = this.state;
    console.log(`render:${text}`);

    return (
      <p>{text}</p>
    )
  }
}

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  toggle() {
    const { isShow } = this.state;

    this.setState({
      isShow: !isShow,
    })
  }

  render() {
    const { isShow } = this.state;

    let myTest;
    if (isShow) {
      myTest = <MyTest/>
    }


    return (
      <div>
        <button onClick={() => this.toggle()}>切换</button>
        {myTest}
      </div>
    )
  }
}