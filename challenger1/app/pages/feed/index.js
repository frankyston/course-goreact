import React, { Component, Fragment } from 'react';

import Post from '../../components/post';
import './style.scss';

class Feed extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'https://image.flaticon.com/icons/svg/145/145867.svg',
        name: 'José',
        time: 2,
        content: 'content',
      },
      {
        id: 2,
        avatar: 'https://image.flaticon.com/icons/svg/145/145852.svg',
        name: 'Maria',
        time: 5,
        content: 'content of maria',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <header>RocketBook</header>
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </Fragment>
    );
  }
}
export default Feed;
