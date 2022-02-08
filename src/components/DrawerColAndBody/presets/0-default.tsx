import React from 'react';
import DrawerColAndBody from '../DrawerColAndBody';

export default (
  <DrawerColAndBody
    left
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
  </DrawerColAndBody>
)
