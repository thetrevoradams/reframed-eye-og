import { Text } from '../Text';
import styles from '../page.module.css';

const OrderContacts = () => {
  return (
    <section>
      <Text el="h2">section 3</Text>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="gradientImage"
        src="/section_gradient_615.svg"
        alt=""
        fetchPriority="high"
      />
    </section>
  );
};

export default OrderContacts;
