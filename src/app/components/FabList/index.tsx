'use client';

import styles from './fabList.module.css';
import { getMapUrl } from '@/app/utils/getMapUrl';
import { phoneNumberLink, scheduleLink } from '@/app/utils/constants';
import Calendar from '@/app/icons/calendar.svg';
import Phone from '@/app/icons/phone.svg';
import MapPin from '@/app/icons/map-pin.svg';
import { useEffect, useState } from 'react';

const FabList = () => {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    const _mapUrl = getMapUrl();
    setMapUrl(_mapUrl);
  }, []);

  return (
    <aside className={styles.fabWrapper}>
      <a href={scheduleLink} rel="noreferrer" target="_blank">
        <Calendar />
      </a>
      <a href={`tel:${phoneNumberLink}`} rel="noreferrer">
        <Phone />
      </a>
      <a href={mapUrl} rel="noreferrer" target="_blank">
        <MapPin />
      </a>
    </aside>
  );
};

export default FabList;
