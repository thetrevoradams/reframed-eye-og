import { ReactNode, useEffect, useRef } from 'react';
import style from './modal.module.css';
import { Button } from '../Button';
import { Text } from '../Text';
import Cookies from 'js-cookie';

interface SimpleModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  actionText: string;
  content?: ReactNode;
  showPermanentDismiss?: boolean;
  showJobOfferContent?: boolean;
}

const SimpleModal = ({
  isOpen,
  closeModal,
  title,
  actionText,
  content,
  showPermanentDismiss,
  showJobOfferContent,
}: SimpleModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        modalRef.current.classList.add(`${style.fadeOut}`);
        setTimeout(() => {
          closeModal();
        }, 300);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        modalRef?.current?.classList.add(`${style.fadeOut}`);
        setTimeout(() => {
          closeModal();
        }, 300);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal, isOpen]);

  if (!isOpen) {
    return null;
  }

  const permanentlyDismissModal = () => {
    Cookies.set('skipJobOfferModal', 'true');
    closeModal();
  };

  return (
    <div className={style.scrim}>
      <div
        role="dialog"
        className={`${style.modal} maxTextContent`}
        ref={modalRef}
      >
        <Text el="h3">{title}</Text>
        {content}
        {showJobOfferContent && (
          <Text el="p">
            If interested, please send your resume to{' '}
            <a
              href="mailto:accounts@reframedeye.com"
              className={style.emailLink}
            >
              accounts@reframedeye.com.
            </a>
          </Text>
        )}
        <div className={style.buttonGroup}>
          {showPermanentDismiss && (
            <Button variant="outlined" onClick={permanentlyDismissModal}>
              Don&apos;t show again
            </Button>
          )}
          <Button onClick={closeModal}>{actionText}</Button>
        </div>
      </div>
    </div>
  );
};

export default SimpleModal;
