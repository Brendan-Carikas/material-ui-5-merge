import React from 'react';
import DrawerExpAndBody from '../DrawerExpAndBody';
import PageTitle from '../../PageTitle/PageTitle';

export default (
  <DrawerExpAndBody
    uxpId='drawer-exp-and-body'
    left={false}
    withBiggerMargin={false}
    withoutTopMargin={true}
    drawer={(
      <PageTitle uxpId='page-title-1'>
        Drawer data
      </PageTitle>
    )}
  >
    <PageTitle uxpId='page-title-2'>
      Content data
    </PageTitle>
  </DrawerExpAndBody>
)
