import { Button } from '../Button';
import {
  phoneNumberDisplayed,
  phoneNumberLink,
  scheduleLink,
} from '@/utils/constants';
import SectionText from '../SectionText';

const BookAppointment = () => {
  return (
    <section className="centerColumnContent maxTextContent sectionSpacing">
      <SectionText
        heading="Schedule Your Appointment Online"
        content={
          <>
            We offer convenient online scheduling for eye exams. Prefer to talk
            to someone? No problem! We look forward to your call,{' '}
            <a href={`tel:${phoneNumberLink}`}>{phoneNumberDisplayed}</a>.
          </>
        }
      />
      <a href={scheduleLink}>
        <Button>Book Appointment</Button>
      </a>
    </section>
  );
};

export default BookAppointment;
