import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css';
import RightChevron from '@/app/icons/chevron-right.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  className?: string;
  children: ReactNode;
}

export const Button = ({
  variant = 'filled',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${
        variant === 'outlined' && styles.outlined
      } ${className ?? ''}`}
      {...props}
    >
      {children}
      <RightChevron />
    </button>
  );
};
