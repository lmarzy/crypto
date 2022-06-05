import { ReactNode } from 'react';

import { FontSizeType, SpacingType } from '@crypto/styles';
import { StyledHeading } from './heading.styled';

export interface HeadingPropsInterface {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size: FontSizeType;
  mb?: SpacingType;
  children: ReactNode;
}

export const Heading = ({ headingLevel, size, mb, children }: HeadingPropsInterface) => {
  return (
    <StyledHeading as={headingLevel} $size={size} $mb={mb}>
      {children}
    </StyledHeading>
  );
};
