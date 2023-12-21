import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-native-elements";
import { FlatList, Pressable, Text, View, Image } from "react-native";
import { styles, stylesList } from "../styles/AppStyles";

export default function Products({ navigation }) {
  const [sortBy, setSortBy] = useState("name"); // État du tri
  const [filterBy, setFilterBy] = useState(""); // État du filtre
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "http://94.247.183.122/plesk-site-preview/gourmandise-api.sdupont.v70208.campus-centre.fr/https/94.247.183.122/api/products",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données :",
          error.message,
        );
      });
  }, []);

  const handleProductPress = (item) => {
    navigation.navigate("Fiche produit", {
      productDetails: {
        designation: item.designation,
        descriptif: item.descriptif,
        poids_piece: item.poids_piece,
        quantite: item.quantite,
        photo:
          item.image ||
          "https://cdn.pixabay.com/photo/2022/01/15/19/29/chocolate-6940529_1280.jpg", // Image de test
      },
    });
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
      <View style={stylesList.item}>
        <Text style={stylesList.title}>{item.designation}</Text>
        <Image
          style={stylesList.imageProduits}
          source={{
            uri:
              item.image ||
              "https://cdn.pixabay.com/photo/2022/01/15/19/29/chocolate-6940529_1280.jpg", // Image de test
          }}
        />
      </View>
    </Pressable>
  );

  return (
    <View style={styles.containerProduits}>
      <ButtonGroup
        onPress={(selectedIndex) => {
          if (selectedIndex === 0) handleSortBy("name");
          else if (selectedIndex === 2) handleFilterBy("chocolat");
        }}
        buttons={buttons}
        {...buttonStyles}
      />
      <FlatList
        data={data}
        renderItem={renderProducts}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
}
