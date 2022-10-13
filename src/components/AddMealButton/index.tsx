import React from "react";

import { TouchableOpacityProps } from "react-native";

import {
  Container,
  AboveTitleText,
  ButtonContainer,
  PlusIcon,
  ButtonName,
} from "./styles";

type Props = TouchableOpacityProps & {
  showAboveTextTitle?: boolean;
  aboveTitleText?: string;

  buttonName: string;
};

export function AddMealButton({
  showAboveTextTitle,
  aboveTitleText,
  buttonName,
  ...rest
}: Props) {
  return (
    <Container>
      {showAboveTextTitle && <AboveTitleText>{aboveTitleText}</AboveTitleText>}
      <ButtonContainer {...rest}>
        <PlusIcon />
        <ButtonName>{buttonName}</ButtonName>
      </ButtonContainer>
    </Container>
  );
}
