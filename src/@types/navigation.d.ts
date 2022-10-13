import { MealDTO } from "../DTOs/MealDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newmeal: undefined;
      statistics: undefined;
      mealdetails: {
        meal: MealDTO;
      };
      editmeal: {
        meal: MealDTO;
      };
      result: {
        onDiet: boolean;
      };
    }
  }
}
