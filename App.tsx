import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/stackNavigator";
import { StatusBar } from "react-native";
// import { StatusBar } from "react-native/types_generated/index";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#889551"} />
      <StackNavigator />
    </NavigationContainer>
  );
}