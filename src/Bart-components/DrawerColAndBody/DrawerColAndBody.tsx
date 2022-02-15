import React, { PropsWithChildren, ReactNode } from 'react';
import { Grid } from '@mui/material';
import clsx from 'clsx';

import './style.scss';

export type DrawerColAndBodyProps = PropsWithChildren<{
  left: boolean;
  withBiggerMargin?: boolean;
  drawer: ReactNode;
  centered?: boolean;
}>;

export default function DrawerColAndBody({
  children,
  left,
  drawer,
  withBiggerMargin = false,
  centered = false,
  ...props
}: DrawerColAndBodyProps) {
  const setGridStyle = () => {
    if (left && withBiggerMargin) {
      return 'invotra-drawcolandbody-grid-bigger-right-margin';
    } if (!left && withBiggerMargin) {
      return 'invotra-drawcolandbody-grid-bigger-left-margin';
    } if (centered) {
      return 'invotra-drawcolandbody-grid-centered';
    }
    return '';
  };

  const gridStyle = setGridStyle();

  return (
    <>
      <div className="invotra-drawcolandbody">
        {left && (<div className="invotra-drawcolandbody-drawer">{ drawer }</div>)}
        <Grid
          container
          justifyContent="center"
          className={clsx('invotra-drawcolandbody-grid', gridStyle)}
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
          >
            {children}
          </Grid>
        </Grid>
        {!left && (<div className="invotra-drawcolandbody-drawer">{ drawer }</div>)}
      </div>
    </>
  );
}
