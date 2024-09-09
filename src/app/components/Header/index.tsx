import { Text } from '../Text';

const Header = () => {
  return (
    <header>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="gradientImage"
        src="/header_gradient.svg"
        alt=""
        fetchPriority="high"
      />
    </header>
  );
};

export default Header;
