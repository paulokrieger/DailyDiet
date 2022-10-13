import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  Container,
  HandleButton,
  GoIcon,
  Value,
  DietText,
  HighLightProps,
} from "./styles";

interface Props extends HighLightProps {
  value: any;
}

export function Highlight({ dietOk, value, ...props }: Props) {
  const navigation = useNavigation();

  function handleGoToResult() {
    navigation.navigate("statistics" as any);
  }

  return (
    <Container dietOk={dietOk} {...props}>
      <HandleButton onPress={handleGoToResult}>
        <GoIcon dietOk={dietOk} />
      </HandleButton>
      <Value>{value}</Value>
      <DietText>das refeições dentro da dieta</DietText>
    </Container>
  );
}
