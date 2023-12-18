import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { styles } from "../styles/AppStyles";

export default function Navbar({ title, navigation, route }) {
  return (
    <View style={styles.containerNavBottom}>
      {route.name !== "Home" && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text>{title}</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
