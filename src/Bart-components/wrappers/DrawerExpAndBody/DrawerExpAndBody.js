import React from 'react';
import PropTypes from 'prop-types';
import { default as DrawerExpAndBodyExample } from '../../../Bart-components/DrawerExpAndBody/DrawerExpAndBody';

function DrawerExpAndBody(props) {
    return (
      <DrawerExpAndBodyExample
        left={props.left}
        drawer={props.drawer}
        withBiggerMargin={props.withBiggerMargin}
        className={props.className}
        withoutTopMargin={props.withoutTopMargin}
      >
        { props.children }
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
