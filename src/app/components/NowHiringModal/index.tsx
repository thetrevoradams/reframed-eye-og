import { useLayoutEffect, useRef, useState } from 'react';
import SimpleModal from '../SimpleModal';
import Cookies from 'js-cookie';
const NowHiringModal = () => {
  const [showHiringModal, setShowHiringModal] = useState(false);

  useLayoutEffect(() => {
    const skipJobOfferModal = Cookies.get('skipJobOfferModal');
    if (!skipJobOfferModal) {
      setShowHiringModal(true);
    }
  }, []);

  return (
    <SimpleModal
      isOpen={showHiringModal}
      closeModal={() => setShowHiringModal(false)}
      title="Now hiring opticians with experience."
      actionText="Ok"
      showJobOfferContent
      showPermanentDismiss
    />
  );
};

export default NowHiringModal;
