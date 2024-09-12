import Link from 'next/link';
import { Button } from '../components/Button';
import SectionText from '../components/SectionText';
import styles from '../page.module.css';
import {
  phoneNumberDisplayed,
  phoneNumberLink,
  scheduleLink,
} from '../utils/constants';
import localStyles from './lowVision.module.css';

export default function LowVision() {
  return (
    <main className={styles.main}>
      <section className="sectionSpacing centerColumnContent">
        <SectionText
          heading="Low Vision Services"
          content={
            <>
              At Reframed Eye, we help individuals with poor vision use visual
              aids to enhance their quality of life. Looking to schedule an
              exam? We look forward to your call,{' '}
              <a href={`tel:${phoneNumberLink}`}>{phoneNumberDisplayed}</a>.
            </>
          }
          className={localStyles.lowVisionContent}
        />
        <a href={phoneNumberLink} className={localStyles.lowVisionContent}>
          <Button>Call Now</Button>
        </a>
        <Link href="/" className={localStyles.lowVisionContent}>
          <Button variant="outlined">View site</Button>
        </Link>
      </section>
    </main>
  );
}
