import React from 'react';
import { 
  Button,
  ImageContainer,
  Text
} from './styles'
import { SvgProps } from 'react-native-svg';

interface Props {
  title: string;
  svg: React.FC<SvgProps>
}

export function SignInSocialButton({ title, svg : Svg, ...rest }: Props){
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Text>{title}</Text>
    </Button>
  )
}