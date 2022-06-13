import { Route, Routes } from 'react-router-dom';

import { Stampede, Stake } from '@crypto/features';
import { Box, Grid, Heading } from '@crypto/ui';
import { Header, Info, Nav } from './components';
import { useEffect, useState } from 'react';

export const ElephantPage = () => {
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    const res = await fetch('https://api.pancakeswap.info/api/v2/tokens/0xdd325C38b12903B727D16961e61333f4871A70E0');
    const data = await res.json();

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const toNum = Number(data.data.price);
  const trunkPriceToNum = Number(toNum.toFixed(2));

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
                  <Route path="/stampede" element={<Stampede price={trunkPriceToNum} />} />
                  <Route path="/stake" element={<Stake price={trunkPriceToNum} />} />
                </Routes>
              </Grid.Item>
            </Grid>
          </Grid.Item>
          <Grid.Item span={12} bpMd={3}>
            <Box backgroundColor="white" p={2}>
              <Heading size="default" mb={2}>
                How to help and support the recovery of EM
              </Heading>
              <Info />
            </Box>
          </Grid.Item>
        </Grid>
      </main>
    </>
  );
};
