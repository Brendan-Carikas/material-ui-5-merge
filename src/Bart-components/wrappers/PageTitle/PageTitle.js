import React from 'react';
import PropTypes from 'prop-types';
import { default as PageTitleExample } from '../../../Bart-components/PageTitle/PageTitle';

function PageTitle(children,
  className,
  compact) {
    return (
      <PageTitleExample
        compact={compact}
        className={className}
      >
        { children }
      </PageTitleExample>
    );
}

PageTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
}

export default PageTitle;
