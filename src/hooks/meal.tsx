import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useCallback,
} from "react";
import { MealDTO, MealGroupDTO } from "../DTOs/MealDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storage/storageConfig";

export const MealContext = createContext({} as MealContextType);

interface MealProviderProps {
  children: ReactNode;
}

interface MealContextType {
  meals: MealGroupDTO[];
  loadMeals: () => void;
  addMeal: (meal: MealDTO) => void;
  editMeal: (meal: MealDTO, oldDate: string) => void;
  deleteMeal: (meal: MealDTO) => void;
}

export function MealContextProvider({ children }: MealProviderProps) {
  const [meals, setMeals] = useState<MealGroupDTO[]>([]);

  async function addMeal(newMeal: MealDTO) {
    try {
      const storedMeals = (await loadMeals()) as MealGroupDTO[];
      const newMealList = [...(storedMeals || [])];

      const titleIdx = newMealList.findIndex(
        (meal) => meal.title === newMeal.date
      );

      if (titleIdx >= 0) {
        newMealList[titleIdx].data.push(newMeal);
      } else {
        newMealList.push({
          title: newMeal.date,
          data: [newMeal],
        });
      }

      setMeals(newMealList);

      await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newMealList));
    } catch (err) {
      console.log(err);
    }
  }

  async function editMeal(editMeal: MealDTO, oldDate: string) {
    try {
      const oldMeal = { ...editMeal };
      oldMeal.date = oldDate;
      await deleteMeal(oldMeal);
      await addMeal(editMeal);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteMeal(deletedMeal: MealDTO) {
    try {
      const storedMeals = await loadMeals();
      const newMealList = [...(storedMeals || [])];

      const titleIdx = newMealList.findIndex(
        (title) => title.title === deletedMeal.date
      );

      const mealIdx = newMealList[titleIdx].data.findIndex(
        (m) => m.id === deletedMeal.id
      );

      newMealList[titleIdx].data.splice(mealIdx, 1);

      if (newMealList[titleIdx].data.length === 0) {
        newMealList.splice(titleIdx, 1);
      }

      const newMealListUpdated = JSON.stringify(newMealList);

      await AsyncStorage.setItem(MEAL_COLLECTION, newMealListUpdated);
      setMeals(newMealList);
    } catch (err) {
      console.log(err);
    }
  }

  const loadMeals = useCallback(async () => {
    try {
      const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
      const storedMeals: MealGroupDTO[] = storage ? JSON.parse(storage) : [];
      setMeals(storedMeals);
      return storedMeals;
    } catch (err) {
      console.log(err);
    }
  }, [meals]);

  return (
    <MealContext.Provider
      value={{
        meals,
        addMeal,
        deleteMeal,
        editMeal,
        loadMeals,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}

function useMeal(): MealContextType {
  const context = useContext(MealContext);
  return context;
}

export { useMeal };
