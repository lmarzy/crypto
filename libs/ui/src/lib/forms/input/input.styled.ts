import { theme } from '@crypto/styles';
import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: ${theme.heights.inputs};
  padding: ${theme.spacings[2]};
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyMedium};
  border-radius: ${theme.borderRadius.small};
  outline: 0;

  &:focus {
    border: 1px solid ${theme.colors.greyDark};
  }
`;
