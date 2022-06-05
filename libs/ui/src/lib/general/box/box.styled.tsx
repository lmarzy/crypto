import styled, { css } from 'styled-components';

import { ColorType, SpacingType, theme } from '@crypto/styles';

interface StyledBoxPropsInterface {
  $m?: SpacingType;
  $mt?: SpacingType;
  $mb?: SpacingType;
  $ml?: SpacingType;
  $mr?: SpacingType;
  $p?: SpacingType;
  $pt?: SpacingType;
  $pb?: SpacingType;
  $pl?: SpacingType;
  $pr?: SpacingType;
  $backgroundColor?: ColorType;
}

export const StyledBox = styled.div<StyledBoxPropsInterface>`
  width: 100%;

  ${({ $m }) =>
    $m &&
    css`
      margin: ${theme.spacings[$m]};
    `}

  ${({ $mt }) =>
    $mt &&
    css`
      margin-top: ${theme.spacings[$mt]};
    `}

  ${({ $mb }) =>
    $mb &&
    css`
      margin-bottom: ${theme.spacings[$mb]};
    `}

  ${({ $ml }) =>
    $ml &&
    css`
      margin-top: ${theme.spacings[$ml]};
    `}
  
  ${({ $mr }) =>
    $mr &&
    css`
      margin-top: ${theme.spacings[$mr]};
    `}
  
    ${({ $p }) =>
      $p &&
      css`
        padding: ${theme.spacings[$p]};
      `}

  ${({ $pt }) =>
    $pt &&
    css`
      padding-top: ${theme.spacings[$pt]};
    `}

  ${({ $pb }) =>
    $pb &&
    css`
      padding-bottom: ${theme.spacings[$pb]};
    `}

  ${({ $pl }) =>
    $pl &&
    css`
      padding-top: ${theme.spacings[$pl]};
    `}
  
  ${({ $pr }) =>
    $pr &&
    css`
      padding-top: ${theme.spacings[$pr]};
    `}
  
  ${({ $backgroundColor }) =>
    $backgroundColor &&
    css`
      background-color: ${theme.colors[$backgroundColor]};
      border-radius: ${theme.borderRadius.small};
      box-shadow: 0 0 8px rgb(0 0 0 / 0.1);
    `}}
`;
