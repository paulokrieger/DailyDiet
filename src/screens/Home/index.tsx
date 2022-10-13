import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState, useCallback, useEffect } from "react";
import { Text, SectionList, FlatList } from "react-native";
import { AddMealButton } from "../../components/AddMealButton";
import { FoodCard } from "../../components/FoodCard";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { useMeal } from "../../hooks/meal";

import { MEAL_COLLECTION, STATS_COLLECTION } from "../../storage/storageConfig";

import format from "date-fns/format";
import { ptBR } from "date-fns/locale";

import { Container, Date } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStatistics } from "../../hooks/statistics";
import { MealDTO } from "../../DTOs/MealDTO";

export function Home() {
  const { meals, loadMeals } = useMeal();

  const { mealsOnDietPercentage, getHeaderColorByDiet } = useStatistics();

  const navigation = useNavigation();

  function handleAddNewMeat() {
    navigation.navigate("newmeal");
  }

  function handleEditMeal(meal: MealDTO) {
    navigation.navigate("mealdetails", {
      meal: meal,
    });
  }

  async function getItemsFromAsyncStorage() {
    const items = await AsyncStorage.getItem(MEAL_COLLECTION);
    return items;
  }

  useEffect(() => {
    // AsyncStorage.clear();
    getItemsFromAsyncStorage();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight
        dietOk={getHeaderColorByDiet()}
        value={`${mealsOnDietPercentage}%`}
      />

      <AddMealButton
        aboveTitleText="Refeições"
        buttonName="Nova refeição"
        showAboveTextTitle={true}
        onPress={handleAddNewMeat}
      />

      <SectionList
        sections={meals}
        renderItem={({ item }) => (
          <FoodCard
            name={item.name}
            time={String(item.time)}
            onDiet={item.type}
            onPress={() => handleEditMeal(item)}
          />
        )}
        renderSectionHeader={({ section }) => <Date>{section.title}</Date>}
        keyExtractor={(item) => String(item.id)}
      />
    </Container>
  );
}
