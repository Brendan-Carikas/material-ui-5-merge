import React from 'react';
import PropTypes from 'prop-types';
import { default as FixedBodyExample } from '../../../Bart-components/FixedBody/FixedBody';

function FixedBody(children,
  className,
  hasHeader) {
    return (
      <FixedBodyExample
        hasHeader={hasHeader}
        className={className}
      >
        { children }
      </FixedBodyExample>
    );
}

FixedBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasHeader: PropTypes.bool,
}

export default FixedBody;
