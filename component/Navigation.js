import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Navbar from "./Navbar";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import PasswordForget from "../screens/PasswordForget";
import Products from "../screens/Products";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function Navigation() {
  function Log() {
    return (
      <Stack.Navigator initialRouteName={Login}>
        <Stack.Screen name="Connexion" component={Login} />
        <Stack.Screen name="PasswordForget" component={PasswordForget} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={() => ({
            header: (props) => <Navbar {...props} title="Accueil" />,
          })}
        />

        <Drawer.Screen
          name="Se connecter"
          component={Log}
          options={() => ({
            header: (props) => <Navbar {...props} title="Se connecter" />,
          })}
        />

        <Drawer.Screen
          name="Inscription"
          component={Register}
          options={() => ({
            header: (props) => <Navbar {...props} title="Inscription" />,
          })}
        />

        <Drawer.Screen
          name="Nos produits"
          component={Products}
          options={() => ({
            header: (props) => <Navbar {...props} title="Nos produits" />,
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
