import { orderContactsLink } from '@/app/utils/constants';
import { Button } from '../Button';
import SectionGradientContainer from '../SectionGradientContainer';
import SectionText from '../SectionText';
import style from './contacts.module.css';

const OrderContacts = () => {
  return (
    <SectionGradientContainer>
      <SectionText
        heading="Order Your Contact Lenses Online"
        content="We make it easy to place an order. Order online and have your contacts delivered to your home or office. Prefer to talk to someone? No problem! Stop by or give us a call and we will glady assist you with your order."
        contentClassName={style.subtitle}
        noHorizontalPadding
      />
      <a href={orderContactsLink} target="_blank" rel="noopener noreferrer">
        <Button aria-haspopup className={style.ctaButton}>
          Order Contacts
        </Button>
      </a>
    </SectionGradientContainer>
  );
};

export default OrderContacts;
