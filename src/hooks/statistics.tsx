import { useContext, createContext, ReactNode } from "react";

import { useMeal } from "./meal";

export const StatisticsContext = createContext({} as StatisticContextType);

interface StatisticProviderProps {
  children: ReactNode;
}

interface StatisticContextType {
  mealsOnDietPercentage: number;
  mealsQuantity: number;
  mealsOnDiet: number;
  mealsOffDiet: number;
  mealsOnDietSequence: number;
  getHeaderColorByDiet: () => boolean;
}

export function StatisticContextProvider({ children }: StatisticProviderProps) {
  const { meals } = useMeal();

  const onDietPercentage = 70;

  let totalMeals = 0;
  let onDietMeals = 0;
  let offDietMeals = 0;
  let sequenceOfOnDietMeals = 0;
  let sequenceOfOnDietMealsAux = 0;

  meals.forEach((meal) =>
    meal.data.map((m) => {
      totalMeals++;
      if (m.type === true) {
        onDietMeals++;
      } else {
        offDietMeals++;
      }
    })
  );

  meals.map((meal) =>
    meal.data.forEach((m) => {
      //se a refeição estiver na dieta, adicionar na variavel auxiliar
      if (m.type === true) {
        sequenceOfOnDietMealsAux++;
      } else {
        //se a refeicao for fora da dieta, setar a variavel auxiliar como 0
        sequenceOfOnDietMealsAux = 0;
      }
      //se a variavel auxiliar for maior que a quantidade de pratos na dieta atual,
      // setar a variavel da dieta atual com o valor atual da auxiliar
      if (sequenceOfOnDietMealsAux > sequenceOfOnDietMeals) {
        sequenceOfOnDietMeals = sequenceOfOnDietMealsAux;
      }
    })
  );

  const mealsOnDietPercentage =
    meals.length === 0
      ? 0
      : Number(((onDietMeals / totalMeals) * 100).toFixed(2));

  const mealsQuantity = totalMeals;
  const mealsOnDiet = onDietMeals;
  const mealsOffDiet = offDietMeals;
  const mealsOnDietSequence = sequenceOfOnDietMeals;

  function getHeaderColorByDiet() {
    if (onDietPercentage < mealsOnDietPercentage) {
      return true;
    } else {
      return false;
    }
  }

  // console.log("mealsOnDiet", mealsOnDiet);

  return (
    <StatisticsContext.Provider
      value={{
        mealsOnDietPercentage,
        mealsOffDiet,
        mealsOnDiet,
        mealsQuantity,
        mealsOnDietSequence,
        getHeaderColorByDiet,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
}

function useStatistics(): StatisticContextType {
  const context = useContext(StatisticsContext);

  return context;
}

export { useStatistics };
