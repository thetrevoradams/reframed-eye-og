import { ReactNode } from 'react';
import styles from './sectionText.module.css';
import Divider from '../Divider';
import { Text } from '../Text';
import { TextElement } from '../Text/types';

interface SectionTextProps {
  heading: string;
  content: string | ReactNode;
  headingEl?: TextElement;
  contentEl?: TextElement;
}

const SectionText = ({
  heading,
  headingEl = 'h2',
  content,
  contentEl = 'p',
}: SectionTextProps) => {
  return (
    <div className="centerColumnContent maxTextContent horizontalPadding">
      <Text el={headingEl} center className={styles.heading}>
        {heading}
      </Text>
      <Divider />
      <Text el={contentEl} center className={styles.content}>
        {content}
      </Text>
    </div>
  );
};

export default SectionText;
