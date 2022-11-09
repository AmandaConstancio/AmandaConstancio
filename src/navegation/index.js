import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Sobre } from "../screens/sobre";
import { Paginicial } from "../screens/Paginainicial";
import { Produtos } from "../screens/Produtos";

import { Contato } from "../screens/Contato";
import { noticia } from "../screens/Noticias";


//const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator();

export const GPRootNavigation = () => {
  return (
    <MBNav.Navigator activeColor="white" inactiveColor="gray" barStyle={{ backgroundColor: "black"}}>
      <MBNav.Screen
        name="Página Inicial"
        component={Paginicial}
        options={{
          tabBarLabel: "Página Inicial",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-tree" color={color} size={25} />
          ),
        }}
      />
      <MBNav.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarLabel: "Produtos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-fit" color={color} size={25} />
          ),
        }}
      />
        <MBNav.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarLabel: "Contato",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cellphone" color={color} size={25} />
          ),
        }}
      />
       <MBNav.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bubble" color={color} size={25} />
          ),
        }}
      /> 
      
    </MBNav.Navigator>
  );
};

const color = {
  color: "white"
}
