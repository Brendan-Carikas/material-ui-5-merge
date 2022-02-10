import React from 'react';
import MUICard from '@mui/material/Card';
import { CardProps } from '@mui/material/Card';

export default function TestCard(props: CardProps) {
  return (
    <MUICard {...props}>{props.children}</MUICard>
  )
}
