import React, {useState} from "react";
import { View, Text, Image, Button, FlatList } from "react-native";
import { styles, stylesFiche, stylesList } from "../styles/AppStyles";
import { ButtonGroup } from "react-native-elements";
import resource from "../resources/resource.json";
import {SwiperFlatList} from "react-native-swiper-flatlist";

export default function FormProducts({ route }) {
  const productDetails = route.params?.productDetails;
  const avisClient = resource.avisClient;
    const [recommendedProductImages, setRecommendedProductImages] = useState([
        { id: 1, imageURL: "https://picsum.photos/200/300" },
        { id: 2, imageURL: "https://picsum.photos/200/300" },
        // Ajoutez d'autres objets avec des IDs et des URLs d'images recommandées si nécessaire.
    ]);
    const renderItem = ({ item }) => (
    <View style={stylesFiche.avisContainer}>
      <Text style={stylesFiche.avisNom}>{item.nom}</Text>
      <Text style={stylesFiche.avisTexte}>{item.avis}</Text>
    </View>
  );

  if (!productDetails) {
    return (
      <View style={stylesFiche.container}>
        <Text>Produit non trouvé.</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    console.log("Produit ajouté au panier ! :", productDetails.designation);
  };

  return (
      <View style={stylesFiche.container}>
          <View style={stylesFiche.cardHaut}>
              <Image
                  style={stylesList.imageProduits}
                  source={{
                      uri:
                          productDetails.photo ||
                          "https://cdn.pixabay.com/photo/2022/01/15/19/29/chocolate-6940529_1280.jpg",
                  }}
              />
              <Text style={stylesFiche.title}>{productDetails.designation}</Text>
              <Text style={stylesFiche.text}>{productDetails.descriptif}</Text>

              <View>
                  <Button
                      title="Ajouter au panier"
                      onPress={handleAddToCart}
                      style={stylesFiche.ajouterProduit}
                  />
              </View>

          </View>
          <View style={stylesFiche.cardBas}>
              <Text style={stylesFiche.title}>Produits conseillés</Text>
              <SwiperFlatList>
                  {recommendedProductImages.map((imageURL, index) => (
                      <View style={styles.slide} key={index}>
                          <Image source={{ uri: imageURL }} style={styles.photo} />
                      </View>
                  ))}
              </SwiperFlatList>
          </View>


      </View>
  );
}
