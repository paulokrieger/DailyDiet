import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Button as RNButton } from "react-native";
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
  Row,
  Scroll,
  Title,
} from "./styles";
import { useMeal } from "../../hooks/meal";

interface Params {
  meal: MealDTO;
}

export function EditMeal() {
  const navigation = useNavigation();

  const route = useRoute();
  const { meal } = route.params as Params;

  const { editMeal } = useMeal();
  const [name, setName] = useState<string>(meal.name);
  const [description, setDescription] = useState<string>(meal.description);
  const [date, setDate] = useState(new Date());

  const [time, setTime] = useState(new Date());
  const [typeSelected, setTypeSelected] = useState<"onDiet" | "offDiet">(
    meal.type === true ? "onDiet" : "offDiet"
  );

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

  function handleChangeTypeSelected(type: "onDiet" | "offDiet") {
    setTypeSelected(type);
  }

  function handleShowDatePicker() {
    setDatePickerVisible(true);
  }

  function handleShowTimePicker() {
    setIsTimePickerVisible(true);
  }

  function handleCloseDatePicker() {
    setDatePickerVisible(false);
  }

  function handleCloseTimePicker() {
    setIsTimePickerVisible(false);
  }

  function handleGetDate(date: Date) {
    setDate(date);
    handleCloseDatePicker();
  }

  function handleGetTime(time: Date) {
    setTime(time);
    handleCloseTimePicker();
  }

  function handleBack() {
    navigation.navigate("home" as any);
  }

  const formattedDate = format(date, "dd.MM.yyyy", { locale: ptBR });
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const formattedTime = String(`${hours}:${minutes}`);
  const oldDate = meal.date;

  function handleEditMeal() {
    try {
      const editedMeal: MealDTO = {
        //    title: formattedDate,
        id: meal.id, //parâmetro não pode ser alterado e serve para verificações
        name, //ok
        description, //ok
        date: formattedDate, //ok
        time: formattedTime, //ok
        type: typeSelected === "onDiet" ? true : false, //ok
      };

      editMeal(editedMeal, oldDate);
      navigation.navigate("home");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container onDiet={meal.type}>
      <HandleBackButton onPress={handleBack}>
        <BackIcon />
      </HandleBackButton>
      <Title>Editar refeição</Title>

      <Content>
        <Scroll>
          <Label>Nome</Label>
          <Input style={{ height: 48 }} value={name} onChangeText={setName} />
          <Label>Descrição</Label>
          <Input
            multiline={true}
            numberOfLines={6}
            style={{ textAlignVertical: "top" }}
            value={description}
            onChangeText={setDescription}
          />
          <Row>
            <Label>Data</Label>
            <Label>Hora</Label>
          </Row>
          <Row>
            <MaskedInput
              style={{ height: 48 }}
              type="datetime"
              value={formattedDate}
              onPressIn={handleShowDatePicker}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleGetDate}
              onCancel={handleCloseDatePicker}
            />
            <MaskedInput
              style={{ height: 48 }}
              type="custom"
              value={formattedTime}
              options={{ mask: "99:99" }}
              onPressIn={handleShowTimePicker}
            />
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleGetTime}
              onCancel={handleCloseTimePicker}
            />
          </Row>
          <Label>Está dentro da dieta?</Label>
          <Row>
            <ButtonSelect
              text="Sim"
              type="onDiet"
              isActive={typeSelected === "onDiet"}
              onPress={() => handleChangeTypeSelected("onDiet")}
            />
            <ButtonSelect
              text="Não"
              type="offDiet"
              isActive={typeSelected === "offDiet"}
              onPress={() => handleChangeTypeSelected("offDiet")}
            />
          </Row>
        </Scroll>

        <Footer>
          <Button text="Salvar alterações" onPress={handleEditMeal} />
        </Footer>
      </Content>
    </Container>
  );
}
