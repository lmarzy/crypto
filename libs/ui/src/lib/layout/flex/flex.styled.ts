import { SpacingType, theme } from '@crypto/styles';
import { CSSProperties } from 'react';

import styled, { css } from 'styled-components';
interface StyledFlexProps {
  $flex?: CSSProperties['flex'];
  $direction?: CSSProperties['flexDirection'];
  $align?: CSSProperties['alignItems'];
  $justify?: CSSProperties['justifyContent'];
  $gap?: SpacingType;
  $wrap?: boolean;
  $isFullWidth?: boolean;
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;

  ${({ $align }) =>
    $align &&
    css`
      align-items: ${$align};
    `}

  ${({ $justify }) =>
    $justify &&
    css`
      justify-content: ${$justify};
    `}

  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${theme.spacings[$gap]};
    `};

  ${({ $wrap }) =>
    $wrap &&
    css`
      flex-wrap: wrap;
    `};

  ${({ $isFullWidth }) =>
    $isFullWidth &&
    css`
      width: 100%;

      > * {
        width: 100%;
      }
    `}
`;
