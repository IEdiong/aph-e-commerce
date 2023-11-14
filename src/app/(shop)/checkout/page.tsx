import NavigateBack from '@/components/navigate-back';
import { Box, Container } from '@/utils/chakra-components';

import { Suspense } from 'react';
import CheckoutForm from './_components/checkout-form';

export default function CheckoutPage() {
  return (
    <Box as="main" bg="aph.neutral.100">
      <Container pb="160px" pt={{ base: '4', md: '33px', lg: '79px' }}>
        <Suspense fallback={null}>
          <NavigateBack />
        </Suspense>

        <CheckoutForm />
      </Container>
    </Box>
  );
}
