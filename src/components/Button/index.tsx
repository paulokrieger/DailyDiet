import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Text } from "./styles";

type Props = TouchableOpacityProps & {
  text: string;
  type?: "primary" | "secondary";
};

export function Button({ text, type = "primary", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Text type={type}>{text}</Text>
    </Container>
  );
}
