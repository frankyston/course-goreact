import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = ({ counter }) => {
    this.setState({
      counter: counter + 1,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <Fragment>
        <h1>Hello ReactJS!</h1>
        <h3>{counter}</h3>
        <Button onClick={this.handleClick}>Clique</Button>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
