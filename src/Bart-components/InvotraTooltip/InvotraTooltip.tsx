import React from 'react';
import { TooltipProps, Tooltip } from '@mui/material';
import clsx from 'clsx';

import './style.scss';

const InvotraTooltip = ({ children, className, ...props }: TooltipProps) => (props.title ? (
  <Tooltip classes={{ tooltip: clsx('invotra-tooltip', className) }} {...props}>
    {children}
  </Tooltip>
) : (
  <>{children}</>
));

export default InvotraTooltip;
