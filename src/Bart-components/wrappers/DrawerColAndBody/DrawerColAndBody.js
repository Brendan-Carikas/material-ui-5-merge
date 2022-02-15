import React from 'react';
import PropTypes from 'prop-types';
import { default as DrawerColAndBodyExample } from '../../../Bart-components/DrawerColAndBody/DrawerColAndBody';

function DrawerColAndBody(children,
  left,
  drawer,
  withBiggerMargin,
  centered) {
  return (
    <DrawerColAndBodyExample
      left={left}
      drawer={drawer}
      withBiggerMargin={withBiggerMargin}
      centered={centered}
    >
      { children }
    </DrawerColAndBodyExample>
  );
}

DrawerColAndBody.propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  drawer: PropTypes.node,
  left: PropTypes.bool,
  withBiggerMargin: PropTypes.bool,
}

export default DrawerColAndBody;
