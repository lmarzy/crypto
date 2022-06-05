import { ReactElement } from 'react';

import { StyledField, StyledLabel } from './field.styled';

export type AsTagType = 'div' | 'fieldset';

interface FieldPropsInterface {
  as?: AsTagType;
  id: string;
  label: string;
  children: ReactElement;
}

export const Field = ({ as = 'div', id, label, children }: FieldPropsInterface) => (
  <StyledField as={as}>
    {as === 'fieldset' ? (
      <StyledLabel as="legend">{label}</StyledLabel>
    ) : (
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    )}
    {children}
  </StyledField>
);
