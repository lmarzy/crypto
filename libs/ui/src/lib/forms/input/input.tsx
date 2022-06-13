import React from 'react';
import { StyledInput } from './input.styled';

interface InputPropsInterface {
  type?: string;
  id: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = 'text', id, value, onChange }: InputPropsInterface) => (
  <StyledInput type={type} id={id} name={id} value={value} onChange={onChange} />
);
