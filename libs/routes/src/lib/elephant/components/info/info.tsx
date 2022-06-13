import { StyledInfo } from './info.styled';

import { infoDetails } from './info-details';

export const Info = () => (
  <StyledInfo>
    {infoDetails.map((detail) => (
      <li key={detail}>{detail}</li>
    ))}
  </StyledInfo>
);
