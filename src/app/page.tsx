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
import { useRef } from 'react';
// import NowHiringModal from './components/NowHiringModal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Home() {
  const serviceSectionRef = useRef<HTMLElement>(null);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/images/headerBackground.webp"
          as="image"
          fetchPriority="high"
        />
      </Head>
      <main className={styles.main}>
        <FabList />
        <Header serviceSectionRef={serviceSectionRef} />
        <BookAppointment />
        <QueryClientProvider client={queryClient}>
          <Testimonials />
        </QueryClientProvider>
        <OurServices ref={serviceSectionRef} />
        <OrderContacts />
        <Footer />
        {/* <NowHiringModal /> */}
      </main>
    </>
  );
}
