import React from 'react';
import MUICard from '@mui/material/Card';

interface TestCardProps {
  children: React.ReactNode;
  classes: React.CSSProperties;
  raised: boolean;
  sx: Object;
}

export default function TestCard(props: TestCardProps) {
  return (
    <MUICard {...props}>{props.children}</MUICard>
  )
}
