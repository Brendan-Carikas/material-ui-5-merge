import React, { PropsWithChildren, ReactNode } from 'react';
import { Grid } from '@mui/material';
import clsx, { ClassValue } from 'clsx';

import './style.scss';

export type DrawerExpAndBodyProps = PropsWithChildren<{
  left: boolean;
  withBiggerMargin?: boolean;
  drawer: ReactNode;
  withoutTopMargin?: boolean;
  className?: ClassValue;
}>;

export default function DrawerExpAndBody({
  children,
  left,
  withBiggerMargin = false,
  drawer,
  className,
  withoutTopMargin = false,
  ...props
}: DrawerExpAndBodyProps) {
  return (
    <>
      <div className={clsx('invotra-drawerexandbody',
        withoutTopMargin && 'invotra-drawerexandbody__without-top-margin')}
      >
        {left && (<div className="invotra-drawerexandbody-drawer">{ drawer }</div>)}
        <Grid
          container
          justifyContent="center"
          className={clsx('invotra-drawerexandbody-grid',
            withBiggerMargin && 'invotra-drawerexandbody-grid-with-bigger-margin', className)}
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
        {!left && (<div className="invotra-drawerexandbody-drawer">{ drawer }</div>)}
      </div>
    </>
  );
}
