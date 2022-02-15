import React from 'react';
import PropTypes from 'prop-types';
import { default as DrawerExpAndBodyExample } from '../../../Bart-components/DrawerExpAndBody/DrawerExpAndBody';

function DrawerExpAndBody(children,
  left,
  withBiggerMargin,
  drawer,
  className,
  withoutTopMargin) {
    return (
      <DrawerExpAndBodyExample
        left={left}
        drawer={drawer}
        withBiggerMargin={withBiggerMargin}
        className={className}
        withoutTopMargin={withoutTopMargin}
      >
        { children }
      </DrawerExpAndBodyExample>
    );
}
DrawerExpAndBody.propTypes = {
  children: PropTypes.node,
  withoutTopMargin: PropTypes.bool,
  drawer: PropTypes.node,
  left: PropTypes.bool,
  className: PropTypes.string,
  withBiggerMargin: PropTypes.bool,
}

export default DrawerExpAndBody;
