import React, { FC, ReactNode } from 'react';

import { StyledGrid, StyledGridItem } from './grid.styled';

export type GridGap = 'none' | 'small' | 'large';

export type GridColumnType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridItemProps {
  span: GridColumnType;
  bpSm?: GridColumnType;
  bpMd?: GridColumnType;
  bpLg?: GridColumnType;
  children: React.ReactElement;
}
export interface GridProps {
  Item: FC<GridItemProps>;
}
interface GridPropsGap {
  children: ReactNode;
}

const Grid: FC<GridPropsGap> & GridProps = ({ children }) => <StyledGrid>{children}</StyledGrid>;

const Item: FC<GridItemProps> = ({ children, bpSm, bpMd, bpLg, span }) => (
  <StyledGridItem $span={span} $bpSm={bpSm} $bpMd={bpMd} $bpLg={bpLg}>
    {children}
  </StyledGridItem>
);

Grid.Item = Item;

export { Grid };
