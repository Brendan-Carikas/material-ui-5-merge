import React from 'react';
import MUICard from '@mui/material/Card';

interface TestCardProps {
  children: JSX.Element;
  classes: JSX.ElementClass;
  raised: boolean;
  sx: Object;
}

export default function TestCard(props: TestCardProps) {
  return (
    <MUICard {...props}>{props.children}</MUICard>
  )
}
