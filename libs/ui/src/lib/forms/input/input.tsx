import React from 'react';
import { StyledInput } from './input.styled';

interface InputPropsInterface {
  type?: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = 'text', id, onChange }: InputPropsInterface) => (
  <StyledInput type={type} id={id} name={id} onChange={onChange} />
);
