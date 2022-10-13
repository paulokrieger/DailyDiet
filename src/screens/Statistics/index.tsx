import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { StatisticsHighlight } from "../../components/StatisticsHighlight";
import { useStatistics } from "../../hooks/statistics";
import theme from "../../theme";

import {
  Container,
  StatusContainer,
  Percentage,
  HandleBackButton,
  StatusText,
  StatisticsContainer,
  Title,
  BackIcon,
  StatisticsHighLightsWithDietContainer,
} from "./styles";

export function Statistics() {
  const navigation = useNavigation();
  const {
    mealsOffDiet,
    mealsOnDiet,
    mealsOnDietPercentage,
    mealsQuantity,
    mealsOnDietSequence,
    getHeaderColorByDiet,
  } = useStatistics();

  function handleBack() {
    navigation.navigate("home" as any);
  }

  return (
    <Container onDiet={getHeaderColorByDiet()}>
      <HandleBackButton onPress={handleBack}>
        <BackIcon />
      </HandleBackButton>
      <StatusContainer>
        <Percentage>{`${mealsOnDietPercentage}%`}</Percentage>
        <StatusText>das refeições dentro da dieta</StatusText>
      </StatusContainer>
      <StatisticsContainer>
        <Title>Estatísticas gerais</Title>
        <StatisticsHighlight
          quantity={mealsOnDietSequence}
          subtitle="melhor sequência de patros dentro da dieta"
          style={{ backgroundColor: theme.COLORS.GRAY_5 }}
        />
        <StatisticsHighlight
          quantity={mealsQuantity}
          subtitle="refeições registradas"
          style={{ backgroundColor: theme.COLORS.GRAY_5 }}
        />

        <StatisticsHighLightsWithDietContainer>
          <StatisticsHighlight
            quantity={mealsOnDiet}
            subtitle="refeições dentro da dieta"
            style={{ backgroundColor: theme.COLORS.GREEN_LIGHT }}
          />
          <StatisticsHighlight
            quantity={mealsOffDiet}
            subtitle="refeições fora da dieta"
            style={{ backgroundColor: theme.COLORS.RED_LIGHT }}
          />
        </StatisticsHighLightsWithDietContainer>
      </StatisticsContainer>
    </Container>
  );
}
