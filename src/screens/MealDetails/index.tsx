import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Modal } from "react-native";
import { AddMealButton } from "../../components/AddMealButton";
import { Button } from "../../components/Button";
import { ButtonSelect } from "../../components/ButtonSelect";
import { Input } from "../../components/Input";
import { MaskedInput } from "../../components/MaskedInput";
import { MealDTO } from "../../DTOs/MealDTO";
import format from "date-fns/format";
import { ptBR } from "date-fns/locale";
import uuid from "react-native-uuid";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
  Container,
  Content,
  HeaderRow,
  HandleBackButton,
  BackIcon,
  Footer,
  Label,
  LabelBold,
  LabelTimeAndHourTitle,
  Row,
  Scroll,
  Title,
  ModalContainer,
  ModalTitle,
  ModalStyle,
} from "./styles";
import { Mark } from "../../components/Mark";
import { useMeal } from "../../hooks/meal";

interface Params {
  meal: MealDTO;
}

export function MealDetails() {
  const navigation = useNavigation();
  const { deleteMeal } = useMeal();
  const route = useRoute();
  const { meal } = route.params as Params;

  const [removeMealModal, setRemoveMealModal] = useState(false);



  function handleBack() {
    navigation.navigate("home");
  }

  function handleEditMeal(meal: MealDTO) {
    navigation.navigate("editmeal", {
      meal: meal,
    });
  }

  function handleRemoveMeal(meal: MealDTO) {
    deleteMeal(meal);
    navigation.navigate("home");
  }

  return (
    <Container onDiet={meal.type}>
      <HandleBackButton onPress={handleBack}>
        <BackIcon />
      </HandleBackButton>
      <Title>Refeição</Title>
      <Content>
        <Scroll>
          <LabelBold>{meal.name}</LabelBold>
          <Label>{meal.description}</Label>

          <LabelTimeAndHourTitle>Data e hora</LabelTimeAndHourTitle>
          <Label>{`${meal.date} às ${meal.time}`}</Label>

          <Mark
            onDiet={meal.type}
            title={meal.type === true ? "dentro da dieta" : "fora da dieta"}
          />
        </Scroll>
        <Button text="Editar refeição" onPress={() => handleEditMeal(meal)} />
        <Modal
          animationType="fade"
          transparent={true}
          visible={removeMealModal}
        >
          <ModalContainer>
            <ModalStyle>
              <ModalTitle>
                Deseja realmente excluir o registro da refeição?
              </ModalTitle>
              <Row>
                <Button
                  text="Cancelar"
                  type="primary"
                  onPress={() => setRemoveMealModal(!removeMealModal)}
                />
                <Button
                  text="Sim, excluir"
                  type="secondary"
                  style={{ marginLeft: 8 }}
                  onPress={() => handleRemoveMeal(meal)}
                />
              </Row>
            </ModalStyle>
          </ModalContainer>
        </Modal>
        <Button
          type="secondary"
          text="Excluir refeição"
          onPress={() => {
            setRemoveMealModal(!removeMealModal);
          }}
        />
      </Content>
    </Container>
  );
}
