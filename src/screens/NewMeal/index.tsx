import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Button as RNButton,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { AddMealButton } from "../../components/AddMealButton";
import { Button } from "../../components/Button";
import { ButtonSelect } from "../../components/ButtonSelect";
import { Input } from "../../components/Input";
import { MaskedInput } from "../../components/MaskedInput";
import { MealDTO } from "../../DTOs/MealDTO";
import format from "date-fns/format";
import { ptBR } from "date-fns/locale";
import uuid from "react-native-uuid";
import { useHeaderHeight } from "@react-navigation/elements";

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

export function NewMeal() {
  const headerHeight = useHeaderHeight();

  const navigation = useNavigation();

  const route = useRoute();

  const { addMeal } = useMeal();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [typeSelected, setTypeSelected] = useState<"onDiet" | "offDiet">(
    "onDiet"
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

  function handleAddNewMeal() {
    try {
      const newMeal: MealDTO = {
        //    title: formattedDate,

        id: uuid.v4(), //ok
        name, //ok
        description, //ok
        date: formattedDate, //ok
        time: formattedTime, //ok
        type: typeSelected === "onDiet" ? true : false, //ok
      };
      console.log(newMeal);
      addMeal(newMeal);
      navigation.navigate("result", { onDiet: newMeal.type });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <HandleBackButton onPress={handleBack}>
            <BackIcon />
          </HandleBackButton>
          <Title>Nova refeição</Title>

          <Content>
            <Scroll>
              <Label>Nome</Label>
              <Input
                style={{ height: 48 }}
                value={name}
                onChangeText={setName}
              />
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
              <Button
                text="Cadastrar refeição"
                onPress={handleAddNewMeal}
              ></Button>
            </Footer>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
