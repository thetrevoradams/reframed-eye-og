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
          content="Dr. Olsen is a very good optometrist. He is very knowledgeable and thorough with every aspect of eye care. Our kids have really appreciated him as well. He is very patient with them and has also given our kids very good results."
          author="Kory Hunter"
        />
        <TestimonialCard
          content="I made the change to Dr. Olsen this year, and I am glad! Dr. Olsen listened to me and encouraged me to try some contacts out for a few days before ordering. He even made sure I had a prescription for glasses in case I wanted to order those too. He is amazing!"
          author="Brandi Klingler"
        />
        <TestimonialCard
          content="I am very impressed with Dr. Olsen's approach. He explains things clearly and is good at answering my questions. I get very thorough exams because of some of my health issues I am always very satisfied with my treatment when I leave there."
          author="Barbara Wilkerson"
        />
      </div>
    </SectionGradientContainer>
  );
};

export default Testimonials;
