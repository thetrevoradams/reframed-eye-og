'use client';

import { useEffect, useState } from 'react';
import styles from './privacy.module.css';
import { Text } from '@/app/components/Text';
import { Button } from '../components/Button';
import ChevronLeft from '@/app/icons/chevron-left.svg';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const [isLowVision, setIsLowVision] = useState(false);
  const hasWindow = typeof window !== 'undefined';
  useEffect(() => {
    if (!hasWindow) return;

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams) {
      setIsLowVision(!!urlParams.get('lv'));
    }
  }, [hasWindow]);

  return (
    <main
      className={`${styles.main} ${isLowVision ? styles.lowVisionContent : ''}`}
    >
      <section className="centerColumnContent maxTextContent">
        <Link href={'/'} className={styles.backLink}>
          <Button
            showArrow={false}
            variant="outlined"
            className={styles.backLinkButton}
          >
            <ChevronLeft />
          </Button>
        </Link>
        <Text el="h1" styleAs="h2">
          Reframed Eye Privacy Policy
        </Text>
        <Text el="p" className={styles.subtitle}>
          <em>Effective Date:</em> December 1, 2024
        </Text>
        <Text el="p" className={styles.p}>
          I consent to recommended examinations, treatments, and/or diagnostic
          procedures. I understand that there may be associated alternatives,
          benefits and risks, which can be further explained at any time at my
          request. I can stop treatment or express concerns or complaints at any
          time.
        </Text>
        <Text el="p" className={styles.p}>
          If the patient is a minor, I likewise consent to treatment and all
          policies of this agreement on the minor’s behalf. I understand that if
          I share legal custody, I am representing that all parties who have
          legal rights of the minor have been made aware of, and consent to
          treatment for the minor.
        </Text>
        <Text el="p" className={styles.p}>
          I am responsible for any charges not covered by insurance. Co-payments
          are due at the time of service.
        </Text>
        <Text el="p" className={styles.p}>
          Some services, like refraction testing may be required as part of the
          examination. Medicare and many supplemental insurances do not cover
          this test. I am responsible for all non-covered services, including
          refraction testing.
        </Text>
        <Text el="p" className={styles.p}>
          I consent to receiving communications at any provided phone number,
          understanding that these calls may be initiated by us, our affiliates,
          agents, contractors, or assignees. Methods of contact may include
          prerecorded/artificial voice messages, automated dialing devices, and
          text messages. Additionally, I consent to receiving emails under the
          same terms at any provided email address.
        </Text>
        <Text el="p" className={styles.p}>
          All information concerning my medical treatment may be released to
          insurance carriers, pharmacies, and referring providers.
        </Text>
        <Text el="p" className={styles.p}>
          I have a right to access my personal medical record concerning
          diagnosis, treatment options, and expected outcomes. I can also
          request that this information be provided to a person who is acting on
          my behalf.
        </Text>
        <Text el="p" className={styles.p}>
          I have the right to amend my health care information if I feel that it
          is inaccurate or incomplete. My request must be in writing and must
          include an explanation of why the information should be amended.
        </Text>
        <Text el="p" className={styles.p}>
          My protected health information may be used to provide treatment,
          obtain payment for treatment, and conduct health care operations. My
          protected health information may be used or disclosed only for these
          purposes unless authorization for the use is obtained or disclosure is
          otherwise permitted by the HIPAA privacy regulations or state law.
        </Text>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
