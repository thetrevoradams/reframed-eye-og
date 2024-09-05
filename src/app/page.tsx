import styles from './page.module.css';
import Header from './components/Header';
import BookAppointment from './components/BookAppointment';
import Testimonials from './components/Testimonials';
import OurServices from './components/OurServices';
import OrderContacts from './components/OrderContacts';
import Footer from './components/Footer';
import FabList from './components/FabList';

export default function Home() {
  return (
    <main className={styles.main}>
      <FabList />
      <Header />
      <BookAppointment />
      <Testimonials />
      <OurServices />
      <OrderContacts />
      <Footer />
    </main>
  );
}
