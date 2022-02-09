import React from 'react';
import MUICard from '@mui/material/Card';
import { CardProps } from '@mui/material/Card';

interface TestCardProps {
  children: CardProps["children"];
  classes: CardProps["classes"];
  raised: CardProps["raised"];
  sx: CardProps["sx"];
}

export default function TestCard(props: TestCardProps) {
  return (
    <MUICard {...props}>{props.children}</MUICard>
  )
}
