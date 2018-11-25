import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HeaderPost = (props) => {
  const { avatar, name, time } = props;

  return (
    <div className="header-post">
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="info">
        <h4>{name}</h4>
        <span>{`há ${time} min`}</span>
      </div>
    </div>
  );
};

HeaderPost.defaultProps = {
  avatar: 'https://image.flaticon.com/icons/svg/149/149071.svg',
  name: 'User',
  time: '2',
};

HeaderPost.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.number,
};

export default HeaderPost;
