'use client';
import { useRouter } from 'next/navigation';
import { Box } from '@/utils/chakra-components';

const NavigateBack = () => {
  const router = useRouter();
  return (
    <Box
      as="button"
      color="aph.black.900"
      opacity="0.5"
      fontSize="md"
      fontWeight="medium"
      lineHeight="25px"
      _hover={{
        color: 'aph.primary.100',
        transition: 'color .4s ease-out',
      }}
      onClick={() => router.back()}
    >
      Go Back
    </Box>
  );
};

export default NavigateBack;
