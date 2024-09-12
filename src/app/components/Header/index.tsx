import style from './header.module.css';
import { Text } from '../Text';
import { Button } from '../Button';
import { RefObject } from 'react';
import Logo from '@/app/icons/logo.svg';

interface HeaderProps {
  serviceSectionRef: RefObject<HTMLElement | undefined>;
}

const Header = ({ serviceSectionRef }: HeaderProps) => {
  const handleViewServices = () => {
    const servicesSection = serviceSectionRef?.current;
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <header className={style.headerContainer}>
      <div className={style.content}>
        <Logo />
        <div className={style.textWrapper}>
          <div className={style.verticalBar} />
          <div>
            <Text el="h1" styleAs="h2" className={style.heading}>
              See Clearly, Live Vibrantly
            </Text>
            <Text el="p" className={style.subtitle}>
              Welcome to Reframed Eye, where your vision matters most.
            </Text>
          </div>
        </div>
        <Button onClick={handleViewServices}>View Services</Button>
      </div>
    </header>
  );
};

export default Header;
