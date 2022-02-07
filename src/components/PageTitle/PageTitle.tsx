import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';

import { Typography, TypographyProps } from '@mui/material';
import clsx, { ClassValue } from 'clsx';

import './style.scss';

export type PageTitleProps = Partial<TypographyProps> & {
  compact?: boolean;
  className?: ClassValue;
};

export default function PageTitle({
  compact,
  className,
  children,
}: PageTitleProps) {
  const [variant, setVariant] = useState<TypographyProps['variant']>('h2');

  const handleResize = useCallback(() => {
    switch (true) {
    case window.matchMedia('(min-width: 1025px)').matches:
      setVariant('h2');
      break;
    case window.matchMedia('(min-width: 1024px)').matches:
      setVariant('h3');
      break;
    case window.matchMedia('(min-width: 768px)').matches:
      setVariant('h3');
      break;
    case window.matchMedia('(min-width: 315px)').matches:
      setVariant('h2');
      break;
    default:
      setVariant('h4');
    }
  }, [setVariant]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <Typography
      variant={variant}
      className={clsx(
        'invotra-page-title',
        compact ? 'invotra-page-title--compact' : 'invotra-page-title--default',
        className,
      )}
    >
      {children}
    </Typography>
  );
}
