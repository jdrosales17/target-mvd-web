import React from 'react';
import { bool } from 'prop-types';
import Loader from 'react-loaders';
import classNames from 'classnames';

const Loading = ({ fixed = true }) => {
  const loadingClass = classNames('loading-wrapper', { fixed });

  return (
    <div className={loadingClass}>
      <Loader type="ball-scale-multiple" active />
    </div>
  );
};

Loading.propTypes = {
  fixed: bool,
};

export default Loading;
