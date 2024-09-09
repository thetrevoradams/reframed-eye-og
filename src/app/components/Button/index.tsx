import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css';
import RightChevron from '@/app/icons/chevron-right.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  children: ReactNode;
}

export const Button = ({
  variant = 'filled',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${
        variant === 'outlined' && styles.outlined
      }`}
      {...props}
    >
      {children}
      <RightChevron />
    </button>
  );
};
