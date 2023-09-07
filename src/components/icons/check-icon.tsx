import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const CheckIcon = (props: IconProps) => (
  <Icon width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
    <circle cx="10" cy="10" r="9.5" stroke="#CFCFCF" />
    <circle cx="10" cy="10" r="5" fill="currentColor" />
  </Icon>
);

export default CheckIcon;
