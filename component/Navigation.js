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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";
import FormProducts from "../screens/FormProducts";
import Profil from "../screens/Profil";
import CommandeList from "../screens/CommandeList";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const FicheProduitStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Log() {
  return (
    <Stack.Navigator initialRouteName={Login}>
      <Stack.Screen name="Connexion" component={Login} />
      <Stack.Screen name="PasswordForget" component={PasswordForget} />
    </Stack.Navigator>
  );
}

function FicheProduitNavigator() {
  return (
    <FicheProduitStack.Navigator>
      <FicheProduitStack.Screen name="Liste" component={Products} />
      <FicheProduitStack.Screen name="Fiche produit" component={FormProducts} />
    </FicheProduitStack.Navigator>
  );
}

export default function Navigation() {

  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Accueil") {
                        iconName = "home";
                    } else if (route.name === "Se connecter") {
                        iconName = "login";
                    } else if (route.name === "Inscription") {
                        iconName = "add-user";
                    } else if (route.name === "Nos produits") {
                        iconName = "box";
                    } else if (route.name === "Liste des commandes") {
                        iconName = "box";
                    }

                    return <Entypo name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'sienna',
                tabBarStyle: {
                    display: 'flex',
                },
            })}
        >
        {/* Barre de navigation du bas de l'écran */}
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Se connecter" component={Log} />
        <Tab.Screen name="Liste des commandes" component={CommandeList} />
        <Tab.Screen name="Inscription" component={Register} />
        <Tab.Screen name="Nos produits" component={FicheProduitNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
