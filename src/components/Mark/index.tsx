import React from "react";

import { Container, Row, ColorMark, Title } from "./styles";

interface MarkProps {
  onDiet: boolean;
  title: "dentro da dieta" | "fora da dieta";
}

export function Mark({ onDiet, title }: MarkProps) {
  return (
    <Container>
      <Row>
        <ColorMark onDiet={onDiet} />
        <Title>{title}</Title>
      </Row>
    </Container>
  );
}
