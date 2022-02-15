import React from 'react';
import DrawerColAndBody from '../DrawerColAndBody';
import PageTitle from '../../PageTitle/PageTitle';

export default (
  <DrawerColAndBody
    left
    centered
    uxpId='drawer-col-and-body'
    withBiggerMargin={false}
    drawer={(
      <PageTitle uxpId='page-title-1'>
        Drawer data
      </PageTitle>
    )}
  >
    <PageTitle uxpId='page-title-2'>
      Content data
    </PageTitle>
  </DrawerColAndBody>
)
