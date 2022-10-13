import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { NewMeal } from "../screens/NewMeal";
import { EditMeal } from "../screens/EditMeal";
import { Result } from "../screens/Result";
import { Statistics } from "../screens/Statistics";
import { MealDetails } from "../screens/MealDetails";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newmeal" component={NewMeal} />
      <Screen name="mealdetails" component={MealDetails} />
      <Screen name="editmeal" component={EditMeal} />
      <Screen name="result" component={Result} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  );
}
