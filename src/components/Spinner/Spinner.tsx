import React from 'react';
import styles from './Spinner.module.scss';
import { classNames } from '../../utils';

export interface SpinnerProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  delay: number;
  isShowing: boolean;
  theme: 'light' | 'dark'
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ theme = 'light', size = 'sm', delay = 2000, isShowing = true }) => {

  const SIZES = {
    'sm': 16,
    'md': 32,
    'lg': 48,
    'xl': 96
  }

  const style = {
    '--size': `${SIZES[size]}px`,
    '--delay': `${delay}ms`
  } as React.CSSProperties

  return (
    isShowing ?
      <div className={styles.wrapper} style={style}>
        <div className={classNames(styles.spinner, styles[theme])} />
      </div> : null
  );

}

export default Spinner;