import { Route, Routes } from 'react-router-dom';

import { HomePage, DripPage, ElephantPage } from '@crypto/routes';

import { GlobalStyles } from '@crypto/styles';
import { Container } from '@crypto/ui';

export const App = () => (
  <Container>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="drip" element={<DripPage />} />
      <Route path="elephant/*" element={<ElephantPage />} />
    </Routes>
  </Container>
);
