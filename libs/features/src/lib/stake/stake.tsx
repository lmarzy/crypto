import { useState } from 'react';

import { Box, Button, Field, Flex, Input, Heading, Text, Values, Grid } from '@crypto/ui';

interface StakeProps {
  price: number;
}

export const Stake = ({ price }: StakeProps) => {
  const [principal, setPrincipal] = useState(0);
  const [term, setTerm] = useState(0);
  const [trunkPrice, setTrunkPrice] = useState(price);
  const [apr, setApr] = useState(0);
  const [total, setTotal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [totalAtPeg, setTotalAtPeg] = useState(0);
  const [dailyReturn, setDailyReturn] = useState(0);
  const [dailyReturnAtPeg, setDailyReturnAtPeg] = useState(0);
  const [weeklyReturn, setWeeklyReturn] = useState(0);
  const [weeklyReturnAtPeg, setWeeklyReturnAtPeg] = useState(0);
  const [monthlyReturn, setMonthlyReturn] = useState(0);
  const [monthlyReturnAtPeg, setMonthlyReturnAtPeg] = useState(0);

  const n = 365;
  const timeInYears = term / 365;

  const handleGetValue = () => {
    const totalWithInterest = principal * Math.pow(1 + apr / 100 / n, n * timeInYears);
    const interest = totalWithInterest - principal;
    const totalAtPeg = totalWithInterest * trunkPrice;
    const dailyReturn = totalWithInterest / 365;
    const dailyReturnAtPeg = (totalWithInterest / 365) * trunkPrice;
    const weeklyReturn = totalWithInterest / 52;
    const weeklyReturnAtPeg = (totalWithInterest / 52) * trunkPrice;
    const monthlyReturn = totalWithInterest / 12;
    const monthlyReturnAtPeg = (totalWithInterest / 12) * trunkPrice;

    setTotal(Number(totalWithInterest.toFixed(2)));
    setInterest(Number(interest.toFixed(2)));
    setTotalAtPeg(Number(totalAtPeg.toFixed(2)));
    setDailyReturn(Number(dailyReturn.toFixed(2)));
    setDailyReturnAtPeg(Number(dailyReturnAtPeg.toFixed(2)));
    setWeeklyReturn(Number(weeklyReturn.toFixed(2)));
    setWeeklyReturnAtPeg(Number(weeklyReturnAtPeg.toFixed(2)));
    setMonthlyReturn(Number(monthlyReturn.toFixed(2)));
    setMonthlyReturnAtPeg(Number(monthlyReturnAtPeg.toFixed(2)));
  };

  return (
    <section>
      <Heading size="huge" mb={3}>
        Stake Calculator
      </Heading>
      <Box p={3} backgroundColor="greyLight">
        <form noValidate>
          <Box mb={4}>
            <Flex gap={2} isFullWidth>
              <Field id="principal" label="Principal Amount ($)">
                <Input type="number" id="principal" onChange={(e) => setPrincipal(Number(e.target.value))} />
              </Field>
              <Field id="term" label="Term (in days)">
                <Input type="number" id="term" onChange={(e) => setTerm(Number(e.target.value))} />
              </Field>
            </Flex>
          </Box>
          <Box>
            <Flex gap={2} align="flex-end">
              <Field id="trunk-price" label="Trunk Price">
                <Input
                  type="number"
                  id="trunk-price"
                  value={trunkPrice}
                  onChange={(e) => setTrunkPrice(Number(e.target.value))}
                />
              </Field>
              <Field id="apr" label="Current APR">
                <Input type="number" id="apr" onChange={(e) => setApr(Number(e.target.value))} />
              </Field>
              <Button isFullWidth onClick={handleGetValue}>
                Go!
              </Button>
            </Flex>
          </Box>
        </form>
      </Box>

      {total > 0 && (
        <>
          <Box mb={4} mt={4}>
            <Box as="section" backgroundColor="blue" p={4}>
              <Heading size="large" mb={2}>{`Total Amount Bonded after ${term} Days`}</Heading>
              <Flex>
                <Values title1="Trunk" title2="$ Value" value1={total} value2={totalAtPeg} />
                <Values
                  title1="Interest"
                  title2="$ Interest"
                  value1={interest}
                  value2={Number((interest * trunkPrice).toFixed(2))}
                />
              </Flex>
            </Box>
          </Box>
          <Box mb={2}>
            <Grid>
              <Grid.Item span={12} bpMd={4}>
                <Box backgroundColor="orange" p={2}>
                  <Heading size="large" mb={2}>
                    Daily Return
                  </Heading>
                  <Values title1="Trunk" title2="$ Value" value1={dailyReturn} value2={dailyReturnAtPeg} />
                </Box>
              </Grid.Item>
              <Grid.Item span={12} bpMd={4}>
                <Box backgroundColor="orange" p={2}>
                  <Heading size="large" mb={2}>
                    Weekly Return
                  </Heading>
                  <Values title1="Trunk" title2="$ Value" value1={weeklyReturn} value2={weeklyReturnAtPeg} />
                </Box>
              </Grid.Item>
              <Grid.Item span={12} bpMd={4}>
                <Box backgroundColor="orange" p={2}>
                  <Heading size="large" mb={2}>
                    Monthly Return
                  </Heading>
                  <Values title1="Trunk" title2="$ Value" value1={monthlyReturn} value2={monthlyReturnAtPeg} />
                </Box>
              </Grid.Item>
            </Grid>
          </Box>
          <Text>{`After the term of ${term} days, it will take you approx ${Number(
            Math.round(principal / dailyReturn)
          )} days to ROI at Peg and ${Math.round(principal / dailyReturnAtPeg)} days at a Peg of ${trunkPrice}`}</Text>
        </>
      )}
    </section>
  );
};
