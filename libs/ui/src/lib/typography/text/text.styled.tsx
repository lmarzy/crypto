import styled, { css } from 'styled-components';

import { FontSizeType, FontWeightType, SpacingType, TextAlignType, theme } from '@crypto/styles';

interface StyledTextProps {
  $size: FontSizeType;
  $fontWeight?: FontWeightType;
  $mb?: SpacingType;
  $textAlign?: TextAlignType;
}

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${({ $size }) => theme.fontSizes[$size]};

  ${({ $textAlign }) =>
    $textAlign &&
    css`
      text-align: ${$textAlign};
    `};

  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: ${theme.spacings[$mb]};
    `}

  ${({ $fontWeight }) =>
    $fontWeight &&
    css`
      font-weight: ${theme.fontWeights[$fontWeight]};
    `}
`;
