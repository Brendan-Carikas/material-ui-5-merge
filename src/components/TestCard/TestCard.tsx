import React from 'react';
import MUICard from '@mui/material/Card';


/**
 * @uxpindocurl https://mui.com/api/card/
 */
export default function TestCard(props) {
  return (
    <MUICard {...props}>{props.children}</MUICard>
  )
}
