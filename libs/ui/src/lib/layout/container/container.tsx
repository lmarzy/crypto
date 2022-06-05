import { ReactNode } from 'react';

import { StyledContainer } from './container.styled';

export interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);
