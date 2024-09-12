'use client';

import styles from './page.module.css';
import Header from './components/Header';
import BookAppointment from './components/BookAppointment';
import Testimonials from './components/Testimonials';
import OurServices from './components/OurServices';
import OrderContacts from './components/OrderContacts';
import Footer from './components/Footer';
import FabList from './components/FabList';
import Head from 'next/head';
import { useLayoutEffect, useRef, useState } from 'react';
import SimpleModal from './components/SimpleModal';
import Cookies from 'js-cookie';

export default function Home() {
  const serviceSectionRef = useRef<HTMLElement>(null);
  const [showHiringModal, setShowHiringModal] = useState(false);

  useLayoutEffect(() => {
    const skipJobOfferModal = Cookies.get('skipJobOfferModal');
    if (!skipJobOfferModal) {
      setShowHiringModal(true);
    }
  }, []);

  // TODO: Add meta tags for title, description, og, etc.
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/images/headerBackground.png"
          as="image"
          fetchPriority="high"
        />
      </Head>
      <main className={styles.main}>
        <FabList />
        <Header serviceSectionRef={serviceSectionRef} />
        <BookAppointment />
        <Testimonials />
        <OurServices ref={serviceSectionRef} />
        <OrderContacts />
        <Footer />
        <SimpleModal
          isOpen={showHiringModal}
          closeModal={() => setShowHiringModal(false)}
          title="Now hiring opticians with experience."
          actionText="Ok"
          showJobOfferContent
          showPermanentDismiss
        />
      </main>
    </>
  );
}
