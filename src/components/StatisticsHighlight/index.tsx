import React from "react";
import { ViewProps } from "react-native";

import { Container, Quantity, Subtitle } from "./styles";

type StatisticsHighLightProps = ViewProps & {
  color?: string;
  quantity: number;
  subtitle: string;
};

export function StatisticsHighlight({
  quantity,
  subtitle,
  ...props
}: StatisticsHighLightProps) {
  return (
    <Container {...props}>
      <Quantity>{quantity}</Quantity>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
