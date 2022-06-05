import { Heading } from '../../typography';

import { StyledStat, StyledStatDt, StyledStatDd } from './elephant-stat.styled';

interface ElephantStatPropsInterface {
  titleMain: string;
  title1: string;
  title2: string;
  value1: number;
  value2: number;
}

export const ElephantStat = ({
  titleMain,
  title1,
  title2,
  value1,
  value2,
}: ElephantStatPropsInterface) => (
  <StyledStat>
    <Heading size="large" mb={2}>
      {titleMain}
    </Heading>
    <dl>
      <StyledStatDt>{title1}</StyledStatDt>
      <StyledStatDd>{value1}</StyledStatDd>
      <StyledStatDt>{title2}</StyledStatDt>
      <StyledStatDd>{value2}</StyledStatDd>
    </dl>
  </StyledStat>
);
