import React from 'react';
import DrawerExpAndBody from '../DrawerExpAndBody';

export default (
  <DrawerExpAndBody
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
    <div>
      Content data
    </div>
  </DrawerExpAndBody>
)
