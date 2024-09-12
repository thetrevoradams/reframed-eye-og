import { ForwardedRef, forwardRef } from 'react';
import SectionText from '../SectionText';
import ServiceCard from '../ServiceCard';
import style from './services.module.css';

const OurServices = forwardRef((_, ref?: ForwardedRef<HTMLElement>) => {
  return (
    <section className="sectionSpacing centerColumnContent" ref={ref}>
      <SectionText
        heading="Our services"
        content="Ready to prioritize your eye health? Our team of expert optometrists is
        here to guide you every step of the way. From comprehensive eye exams to
        specialized treatments, we're dedicated to ensuring your vision is
        clear and your eyes are healthy."
      />
      <div className={style.servicesWrapper}>
        <div className={style.servicesColumn}>
          <ServiceCard
            imageSrc="/images/service_eyeExam.jpg"
            heading="Eye Exams"
            content="Thorough exams to evaluate your eye health and provide a customized prescription for your lifestyle."
          />
          <ServiceCard
            imageSrc="/images/service_contacts.jpg"
            heading="Contact Lens Fitting"
            content="Personalized prescriptions to maximize vision, comfort, and eye health."
          />
        </div>
        <div className={style.servicesColumn}>
          <ServiceCard
            imageSrc="/images/service_pediatric.jpg"
            heading="Pediatric Eye Care"
            content="Our kid-friendly office welcomes patients of all ages."
          />
          <ServiceCard
            imageSrc="/images/service_lowVision.jpg"
            heading="Low Vision"
            content="Helping individuals with poor vision use visual aids to enhance their quality of life."
          />
        </div>
      </div>
    </section>
  );
});

export default OurServices;
