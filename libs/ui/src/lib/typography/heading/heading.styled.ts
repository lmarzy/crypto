import { FontSizeType, SpacingType, theme } from '@crypto/styles';
import styled, { css } from 'styled-components';

interface StyledHeadingPropsInterface {
  $size: FontSizeType;
  $mb?: SpacingType;
  $mt?: SpacingType;
}

export const StyledHeading = styled.h1<StyledHeadingPropsInterface>`
  font-size: ${({ $size }) => theme.fontSizes[$size]};
  color: ${theme.colors.black};

  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: ${theme.spacings[$mb]};
    `};
`;
