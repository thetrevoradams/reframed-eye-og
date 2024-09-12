import style from './serviceCard.module.css';
import Image from 'next/image';
import { Text } from '../Text';

interface ServiceCardProps {
  imageSrc: string;
  heading: string;
  content: string;
}

const ServiceCard = ({ imageSrc, heading, content }: ServiceCardProps) => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src={imageSrc}
          width={300}
          height={200}
          objectFit="cover"
          objectPosition="center"
          alt={heading}
          className={style.image}
        />
      </div>
      <div className={style.textContainer}>
        <Text el="h3">{heading}</Text>
        <div className={style.headingBorderBar} />
        <Text el="p">{content}</Text>
      </div>
    </div>
  );
};

export default ServiceCard;
