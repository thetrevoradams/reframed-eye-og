import SectionGradientContainer from '../SectionGradientContainer';
import SectionText from '../SectionText';
import TestimonialCard from '../TestimonalCard';
import style from './testimonials.module.css';

const Testimonials = () => {
  return (
    <SectionGradientContainer>
      <SectionText
        heading="What Do Others Say About Dr. Olsen?"
        className={style.sectionText}
        noHorizontalPadding
      />
      <div className={style.testimonialsWrapper}>
        <TestimonialCard
          content="I made the change to Dr. Olsen this year, and I am glad! Dr. Olsen listened to me and encouraged me to try some contacts out for a few days before ordering. Not only was Dr Olsen amazing, but the whole staff was so helpful. Great bunch of people!"
          author="Brandi Klingler"
        />
        <TestimonialCard
          content="Dr. Olsen is a very good optometrist. He is very knowledgeable and thorough with every aspect of eye care. Our kids have really appreciated him as well. He is very patient with them and has also given our kids very good results."
          author="Kory Hunter"
        />
        <TestimonialCard
          content="Dr. Olsen is very thorough and explains the process so I understand what's going on and why. The staff is always helpful and friendly and so their best to help understand coverage and options."
          author="Antonia Montgomery"
        />
      </div>
    </SectionGradientContainer>
  );
};

export default Testimonials;
