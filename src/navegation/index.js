import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PaginaInicial} from "../screens/paginainicial";
import { Sobre } from "../screens/sobre";
import { Produtos } from "../screens/produtos";
import { Registro } from "../screens/registro";
import { Noticias } from "../screens/noticias";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// // Simboliza a instância do Stack
// const Stack = createNativeStackNavigator();
// Simboliza a instância do Stack
const Stack = createNativeStackNavigator();
const MBNav = createMaterialBottomTabNavigator();

// Componente base
export const RootNavigation = () => {
    return (
        <MBNav.Navigator
            activeColor="#fff"
            inactiveColor="rgba(255,255,255,0.5)"
        >
            <MBNav.Screen
                name="PaginaInicial"
                component={PaginaInicial}
                options={{
                    tabBarLabel: 'Página Inicial',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Sobre"
                component={Sobre}
                options={{
                    tabBarLabel: 'Sobre',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Produtos"
                component={Sobre}
                options={{
                    tabBarLabel: 'Produtos',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="phone" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Registro"
                component={Register}
                options={{
                    tabBarLabel: 'Registro',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="android" color={color} size={26} />
                    ),
                }}
            />
            <MBNav.Screen
                name="Notícias"
                component={Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </MBNav.Navigator>
    )
}