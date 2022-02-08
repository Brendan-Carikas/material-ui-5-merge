import React from 'react';
import DrawerExpAndBody from '../DrawerExpAndBody';
import PageTitle from '../../PageTitle/PageTitle';

export default (
  <DrawerExpAndBody
    uxpId='drawer-exp-and-body'
    left={false}
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
  </DrawerExpAndBody>
)
