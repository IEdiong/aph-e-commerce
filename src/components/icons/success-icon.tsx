import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const SuccessIcon = (props: IconProps) => (
  <Icon width="64" height="64" viewBox="0 0 64 64" fill="none" {...props}>
    <circle cx="32" cy="32" r="32" fill="#D87D4A" />
    <path
      d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
      stroke="white"
      strokeWidth="4"
    />
  </Icon>
);

export default SuccessIcon;
