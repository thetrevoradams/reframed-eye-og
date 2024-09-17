import { useState } from 'react';
import { Button } from '../Button';
import SectionGradientContainer from '../SectionGradientContainer';
import SectionText from '../SectionText';
import SimpleModal from '../SimpleModal';
import style from './contacts.module.css';
import { Text } from '../Text';

const OrderContacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <SectionGradientContainer>
      <SectionText
        heading="Order Your Contact Lenses Online"
        content="We make it easy to place an order. Order online and have your contacts delivered to your home or office. Prefer to talk to someone? No problem! Stop by or give us a call and we will glady assist you with your order."
        contentClassName={style.subtitle}
        noHorizontalPadding
      />
      <Button aria-haspopup className={style.ctaButton} onClick={openModal}>
        Order Contacts
      </Button>
      <SimpleModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        title="Contact ordering coming soon!"
        content={
          <Text el="p">
            Our online ordering system will be online shortly. Please check back
            later or stop by or give us a call to place order.
          </Text>
        }
        actionText="Ok"
      />
    </SectionGradientContainer>
  );
};

export default OrderContacts;
