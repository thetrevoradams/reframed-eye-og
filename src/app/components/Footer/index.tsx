'use client';

import {
  phoneNumberDisplayed,
  phoneNumberLink,
  scheduleLink,
} from '@/utils/constants';
import { Button } from '../Button';
import { Text } from '../Text';
import style from './footer.module.css';
import Phone from '@/app/icons/phone.svg';
import MapPin from '@/app/icons/map-pin.svg';
import { getMapUrl } from '@/utils/getMapUrl';
import Image from 'next/image';

const Footer = () => {
  const mapUrl = getMapUrl();

  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <section className={style.sectionContent}>
          <Text el="h3" styleAs="h2">
            Schedule Appointment
          </Text>
          <Text el="p">
            Trust our team to provide exceptional care and personalized
            attention for all your eye care needs. Schedule your appointment
            today and take the first step towards clearer vision and healthier
            eyes.
          </Text>
          <a href={scheduleLink} className={style.button}>
            <Button variant="outlined">Book Appointment</Button>
          </a>
        </section>
        <section className={style.sectionContent}>
          <Text el="h3" styleAs="h2">
            Contact Us
          </Text>
          <div className={style.iconWrapper}>
            <Phone />
            <a href={`tel:${phoneNumberLink}`} rel="noreferrer">
              {phoneNumberDisplayed}
            </a>
          </div>
          <div className={style.iconWrapper}>
            <MapPin />
            <a href={mapUrl} rel="noreferrer" target="_blank">
              3508 S 25 E
              <br />
              Idaho Falls, ID 84331
            </a>
          </div>
          <a href={mapUrl} rel="noreferrer" target="_blank">
            <Image
              src={'/images/map.png'}
              alt="Reframed Eye office location map"
              width={348}
              height={190}
              className={style.image}
            />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
