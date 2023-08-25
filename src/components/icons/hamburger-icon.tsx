import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const HamburgerIcon = (props: IconProps) => (
  <Icon
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="currentColor"
    {...props}
  >
    <g fill="#FFF" fillRule="evenodd">
      <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
    </g>
  </Icon>
);

export default HamburgerIcon;
