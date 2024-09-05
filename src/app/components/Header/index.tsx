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
      <Text el="h2">Hi there</Text>
      <Text el="p">Here is some text</Text>
    </header>
  );
};

export default Header;
