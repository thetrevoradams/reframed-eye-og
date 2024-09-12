import TopCurve from '@/app/icons/top_curve.svg';
import style from './gradientContainer.module.css';
import { PropsWithChildren } from 'react';

const SectionGradientContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.wrapper}>
      <TopCurve className={style.curveSvg} />
      <section className={`centerColumnContent ${style.gradientContainer}`}>
        {children}
      </section>
    </div>
  );
};

export default SectionGradientContainer;
