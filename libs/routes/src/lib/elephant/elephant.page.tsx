import { Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Stampede, Stake } from '@crypto/features';
import { Grid } from '@crypto/ui';
import { Header, Nav } from './components';
import { CoinPriceModel } from '@crypto/models';
import { getCoinPrice } from '@crypto/api';

export const ElephantPage = () => {
  // const { data, isLoading } = useQuery<CoinPriceModel>('coinPriceSearch', () =>
  //   getCoinPrice('0xdd325C38b12903B727D16961e61333f4871A70E0')
  // );

  // console.log(data);

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
