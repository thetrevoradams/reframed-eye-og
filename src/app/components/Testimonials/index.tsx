import { useState } from 'react';
import { Button } from '../Button';
import SectionGradientContainer from '../SectionGradientContainer';
import SectionText from '../SectionText';
import TestimonialCard from '../TestimonalCard';
import style from './testimonials.module.css';
import SimpleModal from '../SimpleModal';
import { Text } from '../Text';
import Image from 'next/image';

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

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
      <Button aria-haspopup onClick={openModal} className={style.bioTriggerBtn}>
        Read Dr. Olsen&apos;s Bio
      </Button>
      <SimpleModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        title="Meet Dr. Olsen"
        content={
          <>
            {/* NOTE: Image must be cropped to be a square image or this component be updated to allow a more flexible sizing  */}
            <Image
              src="/images/jaren.webp"
              height={200}
              width={200}
              objectFit="cover"
              alt="Dr. Jaren Olsen"
              className={style.avatar}
            />
            <div className={style.bioContent}>
              <Text el="p">
                While visiting his grandparents during the summer after 2nd
                grade, Jaren Olsen noticed that the clock in the kitchen was
                blurry. At his next eye exam, an optometrist prescribed him
                glasses and he had the unforgettable experience of noticing the
                individual leaves on the trees outside the office with his new
                glasses. Helping patients have similar experiences has brought
                joy and fulfillment to him the past 7 years as an optometrist.
              </Text>
              <Text el="p">
                In 2012, Jaren married Mitzi Klingler, a multi-generational East
                Idaho native and 7th grade social studies teacher at what is now
                Farnsworth Middle School in Rigby. The next year, they moved to
                Phoenix where, not only did Jaren attend Midwestern University-
                Arizona College of Optometry, but they also welcomed two
                wonderful children into their family. During his final year of
                optometry school, he rotated to four different sites where he
                had a wide range of experience ranging from macular
                degeneration, diabetic retinopathy, cataracts, and glaucoma
                management to pediatric and low vision exams. After graduating,
                Dr. Olsen and his family moved to Northeast Wyoming, feeling
                inspired to go there and work at a private practice as an
                associate optometrist. They have thoroughly enjoyed their time
                in Wyoming, but have again felt inspired to move, this time to
                Idaho where he is fulfilling his aspiration of starting a new
                practice. While sad to leave behind many cherished friends and
                experiences, the Olsens are excited to return to East Idaho to
                live near family, contribute to the community here, and provide
                eye care to the growing population.
              </Text>
              <Text el="p">
                The Olsens enjoy spending time with extended family, serving in
                church, participating in community service, playing board games,
                going for bike rides and walks, swimming, and camping.
              </Text>
            </div>
          </>
        }
        actionText="Close"
      />
    </SectionGradientContainer>
  );
};

export default Testimonials;
