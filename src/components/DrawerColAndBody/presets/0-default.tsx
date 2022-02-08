import React from 'react';
import DrawerColAndBody from '../DrawerColAndBody';
import PageTitle from '../../PageTitle/PageTitle';

export default (
  <DrawerColAndBody
    left
    uxpId='drawer-col-and-body'
    withBiggerMargin={false}
    drawer={(
      <div>
        <p>
          Drawer data
        </p>
      </div>
    )}
  >
    <PageTitle uxpId='page-title'>
      Content data
    </PageTitle>
  </DrawerColAndBody>
)
