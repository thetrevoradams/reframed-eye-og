'use client';

import {
  phoneNumberDisplayed,
  phoneNumberLink,
  scheduleLink,
} from '@/app/utils/constants';
import { Button } from '../Button';
import { Text } from '../Text';
import style from './footer.module.css';
import Phone from '@/app/icons/phone.svg';
import MapPin from '@/app/icons/map-pin.svg';
import { getMapUrl } from '@/app/utils/getMapUrl';
import Image from 'next/image';
import Clock from '@/app/icons/clock.svg';
import Youtube from '@/app/icons/youtube.svg';
import Instagram from '@/app/icons/instagram.svg';
import Facebook from '@/app/icons/facebook.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import SectionGradientContainer from '../SectionGradientContainer';

const Footer = () => {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    const _mapUrl = getMapUrl();
    setMapUrl(_mapUrl);
  }, []);

  return (
    <>
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
            <a
              href={scheduleLink}
              aria-label="Schedule an exam"
              className={style.button}
            >
              <Button variant="outlined">Book Appointment</Button>
            </a>
          </section>
          <section className={style.sectionContent}>
            <Text el="h3" styleAs="h2">
              Contact Us
            </Text>
            <div className={style.iconWrapper}>
              <Phone />
              <a
                href={`tel:${phoneNumberLink}`}
                aria-label="Office phone number"
                rel="noreferrer"
              >
                {phoneNumberDisplayed}
              </a>
            </div>
            <div className={style.iconWrapper}>
              <MapPin />
              <a
                href={mapUrl}
                aria-label="Reframed Eye office location link"
                rel="noreferrer"
                target="_blank"
              >
                3508 S 25th E
                <br />
                Idaho Falls, ID 84331
              </a>
            </div>
            <div className={style.iconWrapper}>
              <Clock aria-label="Reframed Eye office hours" />
              <Text el="p">
                Mon-Thurs: 8am - 5pm
                <br />
                Fri: 8am - 4:30pm
              </Text>
            </div>
            <a
              href={mapUrl}
              aria-label="Reframed Eye office location map"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src={'/images/map.png'}
                alt="Reframed Eye office location map"
                width={348}
                height={190}
                className={style.image}
              />
            </a>
            <div className={style.row}>
              <a
                aria-label="ReframedEye Facebook page"
                href="https://www.facebook.com/profile.php?id=61561251600120"
              >
                <Facebook />
              </a>
              <a
                aria-label="ReframedEye Instagram page"
                href="https://www.instagram.com/reframedeye/"
              >
                <Instagram />
              </a>
              <a
                aria-label="ReframedEye Youtube page"
                href="https://www.youtube.com/channel/UC5qm6k0SoiEnhNG4I8xeWrQ"
              >
                <Youtube />
              </a>
            </div>
          </section>
        </div>
      </footer>
      <SectionGradientContainer hideCurve className={style.footerLinks}>
        <Text el="h4" styleAs="h5" className={style.footerLinksTitle}>
          Policies & Forms
        </Text>
        <Link href={'/privacypolicy'} className={style.footerLink}>
          Privacy Policy
        </Link>
        <a
          href="https://patient-intake.prod.barti.com/86237e89-546a-48f3-ad64-d931811b44af/forms/b519a870-b42d-483c-b15d-40e320959906"
          className={style.footerLink}
        >
          Patient Intake Form
        </a>
        <a
          href="assets/Record_Request_Form.pdf"
          download
          className={style.footerLink}
        >
          Record Request Form
        </a>
      </SectionGradientContainer>
    </>
  );
};

export default Footer;
