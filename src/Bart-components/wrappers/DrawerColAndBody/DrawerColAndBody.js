import React from 'react';
import PropTypes from 'prop-types';
import { default as DrawerColAndBodyExample } from '../../../Bart-components/DrawerColAndBody/DrawerColAndBody';

function DrawerColAndBody(props) {
  return (
    <DrawerColAndBodyExample
      left={props.left}
      drawer={props.drawer}
      withBiggerMargin={props.withBiggerMargin}
      centered={props.centered}
    >
      {props.children}
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
