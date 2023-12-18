import React, { useState } from "react";
import { Button, ButtonGroup } from "react-native-elements";
import {
  FlatList,
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { styles } from "../styles/AppStyles";

export default function Products({ navigation }) {
  const [sortBy, setSortBy] = useState("name"); // État du tri
  const [filterBy, setFilterBy] = useState(""); // État du filtre
  const DATA = [
    {
      id: 1,
      name: "Barre de chocolat au lait",
      description: "Une délicieuse barre de chocolat au lait crémeux.",
      photo:
        "https://cdn.pixabay.com/photo/2013/09/18/18/24/chocolate-183543_1280.jpg",
    },
    {
      id: 2,
      name: "Truffes au chocolat noir",
      description: "Des truffes fondantes au chocolat noir de haute qualité.",
      photo:
        "https://cdn.pixabay.com/photo/2022/01/15/19/29/chocolate-6940529_1280.jpg",
    },
    {
      id: 3,
      name: "Chocolat chaud suisse",
      description: "Le chocolat chaud suisse authentique, épais et délicieux.",
      photo:
        "https://cdn.pixabay.com/photo/2016/11/29/13/54/breakfast-1870009_1280.jpg",
    },
    {
      id: 4,
      name: "Crêpes au Nutella",
      description: "De délicieuses crêpes garnies de Nutella au chocolat.",
      photo:
        "https://cdn.pixabay.com/photo/2021/12/08/19/41/dessert-6856584_1280.jpg",
    },
  ];

  const handleProductPress = (item) => {
    navigation.navigate("Fiche produit", { item: item });
  };
  const handleSortBy = (value) => {
    setSortBy(value);
  };

  const handleFilterBy = (value) => {
    setFilterBy(value);
  };

  const buttons = ["Nom", "Catégorie"];

  const buttonStyles = {
    containerStyle: { height: 40 },
    buttonStyle: { backgroundColor: "sienna" }, // Couleur de fond
    textStyle: { color: "white" }, // Couleur du texte
  };
  const renderProducts = ({ item }) => (
    <Pressable onPress={() => handleProductPress(item)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Image style={styles.imageProduits} source={{ uri: item.photo }} />
      </View>
    </Pressable>
  );

  return (
    <View style={styles.containerProduits}>
      {/* Utiliser ButtonGroup pour des boutons stylés */}
      <ButtonGroup
        onPress={(selectedIndex) => {
          if (selectedIndex === 0) handleSortBy("name");
          else if (selectedIndex === 2) handleFilterBy("chocolat");
        }}
        buttons={buttons}
        {...buttonStyles}
      />
      <FlatList
        data={DATA}
        renderItem={renderProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}
