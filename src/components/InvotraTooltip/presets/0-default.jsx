import React from 'react';
import { IconButton } from '@mui/material';
import * as Icons from '@mui/icons-material';
import InvotraTooltip from '../InvotraTooltip';

export default (
  <InvotraTooltip uxpId="invotra-tooltip" title={'Merge'}>
    <IconButton color={'inherit'}>
      <Icons.ModeOutlined />
    </IconButton>
  </InvotraTooltip>
);
