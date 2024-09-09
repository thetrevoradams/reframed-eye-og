import styles from '../page.module.css';
import { Text } from '@/app/components/Text';

const Testimonials = () => {
  return (
    <section>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="gradientImage"
        src="/section_gradient_724.svg"
        alt=""
        fetchPriority="high"
      />
    </section>
  );
};

export default Testimonials;
