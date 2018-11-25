import React from 'react';
import PropTypes from 'prop-types';
import HeaderPost from '../header-post';

import './style.scss';

const Post = (props) => {
  const { data } = props;
  return (
    <div className="post">
      <HeaderPost avatar={data.avatar} name={data.name} time={data.time} />
      <p className="content-post">{data.content}</p>
    </div>
  );
};

Post.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Post;
