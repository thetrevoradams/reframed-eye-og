import TopCurve from '@/app/icons/top_curve.svg';
import style from './gradientContainer.module.css';
import { PropsWithChildren } from 'react';

interface SectionGradientContainerProps {
  className?: string;
  hideCurve?: boolean;
}

const SectionGradientContainer = ({
  hideCurve = false,
  className = '',
  children,
}: PropsWithChildren<SectionGradientContainerProps>) => {
  return (
    <div className={`${style.wrapper} ${className}`}>
      {!hideCurve && <TopCurve className={style.curveSvg} />}
      <section className={`centerColumnContent ${style.gradientContainer}`}>
        {children}
      </section>
    </div>
  );
};

export default SectionGradientContainer;
