import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text, LittleBall, ButtonSelectProps } from "./styles";

type Props = TouchableOpacityProps &
  ButtonSelectProps & {
    text?: string;
    isActive: boolean;
    type: string;
  };

export function ButtonSelect({ text, type, isActive, ...rest }: Props) {
  return (
    <Container {...rest} type={type} isActive={isActive}>
      <LittleBall type={type} />
      <Text>{text}</Text>
    </Container>
  );
}
