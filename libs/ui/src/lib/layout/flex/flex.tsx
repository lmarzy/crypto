import { SpacingType } from '@crypto/styles';
import { CSSProperties, FC, ReactNode } from 'react';

import { StyledFlex } from './flex.styled';

export type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

interface FlexProps {
  tag?: 'div' | 'section';
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  gap?: SpacingType;
  wrap?: boolean;
  isFullWidth?: boolean;
  children: ReactNode;
}

export const Flex: FC<FlexProps> = ({ tag = 'div', align, justify, gap, wrap, isFullWidth, children }) => (
  <StyledFlex as={tag} $align={align} $justify={justify} $gap={gap} $wrap={wrap} $isFullWidth={isFullWidth}>
    {children}
  </StyledFlex>
);
