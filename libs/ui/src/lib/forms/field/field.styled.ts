import styled from 'styled-components';

import { theme } from '@crypto/styles';

import { AsTagType } from './field';

interface StyledFieldPropsInterface {
  as: AsTagType;
}

export const StyledField = styled.div<StyledFieldPropsInterface>`
  position: relative;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${theme.spacings[1]};
  font-size: ${theme.fontSizes.small};
`;
