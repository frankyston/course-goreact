import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Feed from './pages/feed';

class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Feed />
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
