'use client';
import { theme } from '@/utils/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export function Providers({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store);

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
