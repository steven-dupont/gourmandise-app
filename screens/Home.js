// Home.js
import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/AppStyles";
import Swiper from "react-native-swiper";

export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Recherche effectuée avec la requête :", searchQuery);
  };

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

  return (
    <View style={styles.container2}>
      <ScrollView>
        <View style={styles.positionRecherche}>
          <Image
            style={styles.logoGourmandise}
            source={require("../assets/gourmanidse-removebg-preview.png")}
          ></Image>
          <View
            style={{ flexDirection: "row", alignItems: "center", margin: 10 }}
          >
            <TextInput
              style={styles.formulaireRecherche}
              placeholder="Recherche"
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
            />
            <TouchableOpacity style={styles.btn_search} onPress={handleSearch}>
              <Text style={styles.btn_search_text}>Rechercher</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Swiper avec images */}
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={false}
          showsPagination={false}
        >
          {/* Première slide */}
          <View style={styles.slide}>
            <Image
              source={require("../assets/BlackFriday.png")}
              style={styles.photo1}
            />
          </View>
          {/* Deuxième slide */}
          <View style={styles.slide}>
            <Image
              source={require("../assets/chocolatine.png")}
              style={styles.photo2}
            />
          </View>
        </Swiper>

        <View style={styles.textEspace}></View>

        {/* View pour le texte de test */}
        <View>
          <Text style={styles.texteProduitPhare}>Nos produits phare</Text>
        </View>

        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          loop={false}
          showsPagination={false}
          direction={"horizontal"}
        >
          {/* Troisième slide */}
          <View style={styles.dataSlide}>
            <Image source={{ uri: DATA[2].photo }} style={styles.webImage} />
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <Text style={styles.dataName}>{DATA[2].name}</Text>
            </View>
          </View>
          {/* Quatrième slide */}
          <View style={styles.dataSlide}>
            <Image source={{ uri: DATA[3].photo }} style={styles.webImage} />
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <Text style={styles.dataName}>{DATA[3].name}</Text>
            </View>
          </View>
        </Swiper>

        <View style={styles.textEspace}></View>

        <Text style={styles.aProposTitre}>A propos de nous !</Text>
        <Text style={styles.textEspace}></Text>
        <Text style={styles.presentationGourmandise}>
          Fondée en 1811 par Séraphin Parys à La Rochelle, « Sucreries
          Rochelaises » est une entreprise pionnière dans la fabrication de
          confiseries de luxe en utilisant du chocolat de haute qualité. Malgré
          la fermeture en 1937 due à la crise des années 30, l'héritage a été
          restauré en 2015 par les descendants Didière et Hadrien Parys. Les
          ateliers, maintenant à Reims, produisent quotidiennement 300 kg de
          délices, dont 200 kg de chocolat, sous la marque « Gourmandises,
          Séraphin Parys ». Avec un espace de vente à Reims, l'entreprise
          perpétue le savoir-faire ancestral tout en respectant les normes
          modernes de qualité et de durabilité.
        </Text>
      </ScrollView>
    </View>
  );
}
