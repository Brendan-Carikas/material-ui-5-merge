import React from 'react';
import PropTypes from 'prop-types';
import { default as FixedBodyExample } from '../../../Bart-components/FixedBody/FixedBody';

function FixedBody(props, uxpinRef) {
    return (
      <FixedBodyExample
        ref={uxpinRef}
        hasHeader={props.hasHeader}
        className={props.className}
      >
        { props.children }
      </FixedBodyExample>
    );
}

FixedBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasHeader: PropTypes.bool,
}

export default FixedBody;
