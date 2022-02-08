import React from 'react';
import { Grid, GridProps } from '@mui/material';
import clsx from 'clsx';

import './style.scss';

export interface FixedBodyProps extends GridProps{
  hasHeader?: boolean;
}

export default function FixedBody ({
  children,
  hasHeader,
  className,
  ...props
}: FixedBodyProps) {
  return (
    <Grid
      container
      justifyContent="center"
      className={clsx('invotra-fixed-body', hasHeader && 'invotra-fixed-body-with-header', className)}
      columns={{
        xs: 4, sm: 8, md: 12, lg: 12,
      }}
      {...props}
    >
      <Grid
        item
        lg={12}
        md={12}
        sm={8}
        xs={4}
        className="invotra-fixed-body-inner"
      >
        {children}
      </Grid>
    </Grid>
  )
};
