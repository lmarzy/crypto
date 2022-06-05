import { Route, Routes } from 'react-router-dom';

import { Stampede, Stake } from '@crypto/features';
import { Grid } from '@crypto/ui';
import { Header, Nav } from './components';

export const ElephantPage = () => {
  return (
    <>
      <Header />
      <main>
        <Grid>
          <Grid.Item span={12} bpMd={9}>
            <Grid>
              <Grid.Item span={12} bpSm={3}>
                <Nav />
              </Grid.Item>
              <Grid.Item span={12} bpSm={9}>
                <Routes>
                  <Route path="/stampede" element={<Stampede />} />
                  <Route path="/stake" element={<Stake />} />
                </Routes>
              </Grid.Item>
            </Grid>
          </Grid.Item>
          <Grid.Item span={12} bpMd={3}>
            <div>Stats</div>
          </Grid.Item>
        </Grid>
      </main>
    </>
  );
};
