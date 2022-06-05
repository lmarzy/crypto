import { Heading } from '../../typography';
import {
  StyledStat,
  StyledStatDetails,
  StyledStatDt,
  StyledStatDd,
} from './elephant-stat-main.styled';

interface StatPropsInterface {
  statName: string;
  atPeg: number;
  currentPeg: number;
  interestTrunk: number;
  interestValue: number;
}

export const ElephantStatMain = ({
  statName,
  atPeg,
  currentPeg,
  interestTrunk,
  interestValue,
}: StatPropsInterface) => (
  <StyledStat>
    <Heading size="large" mb={2}>
      {statName}
    </Heading>
    <StyledStatDetails>
      <div>
        <StyledStatDt>trunk</StyledStatDt>
        <StyledStatDd>{atPeg}</StyledStatDd>
        <StyledStatDt>Interest</StyledStatDt>
        <StyledStatDd>{interestTrunk}</StyledStatDd>
      </div>
      <div>
        <StyledStatDt>$ value</StyledStatDt>
        <StyledStatDd>{currentPeg}</StyledStatDd>
        <StyledStatDt>$ Interest</StyledStatDt>
        <StyledStatDd>{interestValue}</StyledStatDd>
      </div>
    </StyledStatDetails>
  </StyledStat>
);
