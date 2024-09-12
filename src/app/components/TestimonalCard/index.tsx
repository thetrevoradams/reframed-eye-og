import { Text } from '../Text';
import style from './testimonial.module.css';
import Star from '@/app/icons/star.svg';

interface TestimonialCardProps {
  content: string;
  author: string;
}

const TestimonialCard = ({ content, author }: TestimonialCardProps) => {
  return (
    <section className={style.card}>
      <div>
        <Text el="p" className={style.author}>
          {author}
        </Text>
        <div className={style.stars}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
      <Text el="p" className={style.content}>
        {content}
      </Text>
    </section>
  );
};

export default TestimonialCard;
