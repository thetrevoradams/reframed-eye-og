import { useEffect, useState } from 'react';
import { Button } from '../Button';
import SectionGradientContainer from '../SectionGradientContainer';
import SectionText from '../SectionText';
import TestimonialCard from '../TestimonalCard';
import style from './testimonials.module.css';
import SimpleModal from '../SimpleModal';
import { Text } from '../Text';
import Image from 'next/image';
import { useReviews } from '@/app/hooks/use-reviews';

interface ReviewType {
  id: number;
  reviewer_name: string;
  text: string;
  rating: number;
}

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { reviews } = useReviews();

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
        {reviews?.map(({ id, text, reviewer_name: reviewerName, rating }) => (
          <TestimonialCard
            key={id}
            content={text}
            author={reviewerName}
            rating={rating}
          />
        ))}
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
              style={{ objectFit: 'cover' }}
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
