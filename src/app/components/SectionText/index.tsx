import { ReactNode } from 'react';
import styles from './sectionText.module.css';
import Divider from '../Divider';
import { Text } from '../Text';
import { TextElement } from '../Text/types';

interface SectionTextProps {
  heading: string;
  content?: ReactNode;
  headingEl?: TextElement;
  contentEl?: TextElement;
  className?: string;
  contentClassName?: string;
  noHorizontalPadding?: boolean;
}

const SectionText = ({
  heading,
  headingEl = 'h2',
  content,
  contentEl = 'p',
  className,
  contentClassName,
  noHorizontalPadding = false,
}: SectionTextProps) => {
  return (
    <div
      className={`centerColumnContent maxTextContent ${
        noHorizontalPadding ? '' : 'horizontalPadding'
      } ${className ?? ''}`}
    >
      <Text el={headingEl} center className={styles.heading}>
        {heading}
      </Text>
      <Divider />
      {content && (
        <Text
          el={contentEl}
          center
          className={`${styles.content} ${contentClassName ?? ''}`}
        >
          {content}
        </Text>
      )}
    </div>
  );
};

export default SectionText;
