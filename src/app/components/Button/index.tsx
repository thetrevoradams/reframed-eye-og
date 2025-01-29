import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css';
import RightChevron from '@/app/icons/chevron-right.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  className?: string;
  showArrow?: boolean;
  children: ReactNode;
}

export const Button = ({
  variant = 'filled',
  className,
  showArrow = true,
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
      {showArrow && <RightChevron />}
    </button>
  );
};
