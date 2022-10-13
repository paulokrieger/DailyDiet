import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Button } from "../../components/Button";
import { onDietResult, offDietResult } from "../../DTOs/ResultDTO";

import { Container, Title, Subtitle, Image } from "./styles";

interface Params {
  onDiet: boolean;
}

export function Result() {
  const navigation = useNavigation();
  const route = useRoute();
  const { onDiet } = route.params as Params;

  function handleHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title type={onDiet ? "onDiet" : "offDiet"}>
        {onDiet ? onDietResult.title : offDietResult.title}
      </Title>
      <Subtitle>
        {onDiet ? onDietResult.description : offDietResult.description}
      </Subtitle>
      <Image source={onDiet ? onDietResult.photo : offDietResult.photo} />

      <Button text="Ir para a página inicial" onPress={handleHome} />
    </Container>
  );
}
