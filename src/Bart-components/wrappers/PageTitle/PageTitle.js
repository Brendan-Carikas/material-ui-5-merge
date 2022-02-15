import React from 'react';
import PropTypes from 'prop-types';
import { default as PageTitleExample } from '../../../Bart-components/PageTitle/PageTitle';

function PageTitle(props) {
    return (
      <PageTitleExample
        compact={props.compact}
        className={props.className}
      >
        { props.children }
      </PageTitleExample>
    );
}

PageTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
}

export default PageTitle;
