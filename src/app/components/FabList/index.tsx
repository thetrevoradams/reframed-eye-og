'use client';

import Image from 'next/image';
import styles from './fabList.module.css';
import { getMapUrl } from '@/utils/getMapUrl';

const FabList = () => {
  const mapUrl = getMapUrl();
  return (
    <aside className={styles.fabWrapper}>
      <a
        href="https://appointments.prod.barti.com/request?org=86237e89-546a-48f3-ad64-d931811b44af"
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src="./icons/calendar.svg"
          height={24}
          width={24}
          alt="Book an appointment"
        />
      </a>
      <a href="tel:208-557-3222" rel="noreferrer">
        <Image src="./icons/phone.svg" height={24} width={24} alt="Call" />
      </a>
      <a href={mapUrl} rel="noreferrer" target="_blank">
        <Image
          src="./icons/map-pin.svg"
          height={24}
          width={24}
          alt="Office location"
        />
      </a>
    </aside>
  );
};

export default FabList;
