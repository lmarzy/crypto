import { StyledButton } from './button.styled';

export type ButtonVariant = 'drip' | 'elephant';
type ButtonType = 'button' | 'submit';

interface ButtonProps {
  children: string;
  type?: ButtonType;
  isFullWidth?: boolean;
  onClick: () => void;
}

export const Button = ({
  type = 'button',
  children,
  isFullWidth = false,
  onClick,
}: ButtonProps) => (
  <StyledButton type={type} $isFullWidth={isFullWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
