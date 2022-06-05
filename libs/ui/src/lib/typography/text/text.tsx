import { ReactNode } from 'react';

import { FontSizeType, FontWeightType, SpacingType, TextAlignType } from '@crypto/styles';
import { StyledText } from './text.styled';

type TagType = 'p' | 'span';

interface TextPropsInterface {
  tag?: TagType;
  size?: FontSizeType;
  fontWeight?: FontWeightType;
  mb?: SpacingType;
  textAlign?: TextAlignType;
  children: ReactNode;
}

export const Text = ({
  tag,
  size = 'default',
  fontWeight,
  mb,
  textAlign,
  children,
}: TextPropsInterface) => {
  return (
    <StyledText as={tag} $size={size} $fontWeight={fontWeight} $mb={mb} $textAlign={textAlign}>
      {children}
    </StyledText>
  );
};
