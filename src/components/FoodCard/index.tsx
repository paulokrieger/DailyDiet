import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  TimeAndFoodContainer,
  Separator,
  Food,
  Mark,
  Time,
  FoodCardTypeProps,
} from "./styles";

type FoodCardProps = FoodCardTypeProps &
  TouchableOpacityProps & {
    time: string;
    name: string;
    onDiet: boolean;
  };

export function FoodCard({ name, time, onDiet, ...rest }: FoodCardProps) {
  return (
    <Container {...rest}>
      <TimeAndFoodContainer>
        <Time>{time}</Time>
        <Separator>|</Separator>
        <Food>{name}</Food>
      </TimeAndFoodContainer>
      <Mark onDiet={onDiet} />
    </Container>
  );
}
