import { ReactNode } from 'react';

import { ColorType, SpacingType } from '@crypto/styles';

import { StyledBox } from './box.styled';

export type TagType = 'div' | 'section' | 'article' | 'aside' | 'span' | 'header';

interface BoxPropsInterface {
  as?: TagType;
  m?: SpacingType;
  mt?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  mr?: SpacingType;
  p?: SpacingType;
  pt?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  pr?: SpacingType;
  backgroundColor?: ColorType;
  children: ReactNode;
}

export const Box = ({
  as,
  m,
  mt,
  mb,
  ml,
  mr,
  p,
  pt,
  pb,
  pl,
  pr,
  backgroundColor,
  children,
}: BoxPropsInterface) => (
  <StyledBox
    as={as}
    $m={m}
    $mt={mt}
    $mb={mb}
    $ml={ml}
    $mr={mr}
    $p={p}
    $pt={pt}
    $pb={pb}
    $pl={pl}
    $pr={pr}
    $backgroundColor={backgroundColor}
  >
    {children}
  </StyledBox>
);
