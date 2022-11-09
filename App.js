import { NavigationContainer } from "@react-navigation/native";
import { GPRootNavigation } from "./src/navegation";


export default function App() {
  return (
    <NavigationContainer>
      <GPRootNavigation />
    </NavigationContainer>
  );
}