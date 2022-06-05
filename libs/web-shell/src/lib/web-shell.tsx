import { Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import { HomePage, DripPage, ElephantPage } from '@crypto/routes';

import { GlobalStyles } from '@crypto/styles';
import { Container } from '@crypto/ui';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Container>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="drip" element={<DripPage />} />
        <Route path="elephant/*" element={<ElephantPage />} />
      </Routes>
    </Container>
  </QueryClientProvider>
);
