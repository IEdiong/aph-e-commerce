import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const ArrowIcon = (props: IconProps) => (
  <Icon width="8" height="12" viewBox="0 0 8 12" fill="currentColor" {...props}>
    <path
      d="M1.322 1l5 5-5 5"
      stroke="#D87D4A"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </Icon>
);

export default ArrowIcon;
