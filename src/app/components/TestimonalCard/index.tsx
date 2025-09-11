import { Text } from '../Text';
import style from './testimonial.module.css';
import Star from '@/app/icons/star.svg';

interface TestimonialCardProps {
  content: string;
  author: string;
  rating: number;
}

const TestimonialCard = ({
  content,
  author,
  rating = 5,
}: TestimonialCardProps) => {
  return (
    <section className={style.card}>
      <div>
        <Text el="p" className={style.author}>
          {author}
        </Text>
        <div className={style.stars}>
          {[...Array(typeof rating === 'number' ? rating : 5)].map((_, i) => (
            <Star key={`star_${i}`} />
          ))}
        </div>
      </div>
      <Text el="p" className={style.content}>
        {content}
      </Text>
    </section>
  );
};

export default TestimonialCard;
