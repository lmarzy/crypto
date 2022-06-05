import { theme } from '@crypto/styles';
import styled from 'styled-components';

interface StyledButtonProps {
  $isFullWidth: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  height: ${theme.heights.inputs};
  padding-left: ${theme.spacings[4]};
  padding-right: ${theme.spacings[4]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  color: white;
  background-color: ${theme.colors.black};
  border-radius: ${theme.borderRadius.small};
  color: white;

  width: ${({ $isFullWidth }) => $isFullWidth && '100%'};
`;
