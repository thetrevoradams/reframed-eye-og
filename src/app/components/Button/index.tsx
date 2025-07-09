import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import styles from './button.module.css';
import RightChevron from '@/app/icons/chevron-right.svg';
import { sendGTMEvent } from '@next/third-parties/google';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  className?: string;
  showArrow?: boolean;
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

export const Button = ({
  variant = 'filled',
  className,
  showArrow = true,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const handleClick = (e: MouseEvent) => {
    sendGTMEvent({ event: 'buttonClicked', value: children?.toString() });
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button
      className={`${styles.button} ${
        variant === 'outlined' && styles.outlined
      } ${className ?? ''}`}
      {...(typeof window !== undefined ? { onClick: handleClick } : {})}
      {...props}
    >
      {children}
      {showArrow && <RightChevron />}
    </button>
  );
};

interface SSGButtonProps
  extends ButtonHTMLAttributes<Omit<HTMLButtonElement, 'onClick'>> {
  variant?: 'filled' | 'outlined';
  className?: string;
  showArrow?: boolean;
  children: ReactNode;
}

export const SSGButton = ({
  variant = 'filled',
  className,
  showArrow = true,
  children,
  ...props
}: SSGButtonProps) => {
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
