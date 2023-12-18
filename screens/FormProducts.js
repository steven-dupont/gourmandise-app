// FormProducts.js
import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles/AppStyles";

export default function FormProducts({ route }) {
  // Vérifiez si route.params est défini avant d'accéder à route.params.item
  const item = route.params?.item;

  if (!item) {
    // Gérez le cas où item est undefined ou null
    return (
      <View style={styles.container}>
        <Text>Produit non trouvé.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Image source={{ uri: item.photo }} style={styles.imageProduits} />
    </View>
  );
}
