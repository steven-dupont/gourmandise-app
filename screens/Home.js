// Home.js
import React, {useContext, useState} from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/AppStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Swiper from "react-native-swiper";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import {Icon} from "@ui-kitten/components";
import resource from "../resources/resource.json";
import {Entypo} from "@expo/vector-icons";
import {AuthContext} from "../component/AuthContext";


const Stack = createNativeStackNavigator();

export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const {signIn, isLoggedIn} = useContext(AuthContext);
  const handleSearch = () => {
    console.log("Recherche effectuée avec la requête :", searchQuery);
  };
  const nous = resource.nous[0];
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

  const handleProductPress = () => {
    navigation.navigate("Nos produits");
  };
console.log("acceuil console log:"+isLoggedIn);
  return (
      <View style={styles.container2}>
        {/* Barre de recherche avec image Gourmandise */}
        <View style={styles.topBar}>
          <Image
              style={styles.logoGourmandiseTopBar}
              source={require("../assets/gourmanidse-removebg-preview.png")}
          />
          <View style={styles.positionRechercheTopBar}>
            <TextInput
                style={styles.formulaireRecherche}
                placeholder="Recherche"
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />
            <TouchableOpacity style={styles.btn_search} onPress={handleSearch}>
              <Entypo name="magnifying-glass" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          {/* Swiper avec les images */}
          <Swiper
              style={styles.wrapper}
              showsButtons={false}
              loop={false}
              showsPagination={false}
              horizontal={true}
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
          <View style={styles.textEspace}></View>
          <Swiper
              style={styles.wrapper}
              showsButtons={false}
              loop={false}
              showsPagination={false}
              direction={"horizontal"}
          >
            {/* Troisième slide */}
            <View style={styles.dataSlide}>
              <TouchableOpacity onPress={handleProductPress}>
                <Image source={{ uri: DATA[2].photo }} style={styles.webImage} />
              </TouchableOpacity>
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Text style={styles.dataName}>{DATA[2].name}</Text>
              </View>
            </View>
            {/* Quatrième slide */}
            <View style={styles.dataSlide}>
              <TouchableOpacity style={styles.btn_search} onPress={handleSearch}>
                <Image source={{ uri: DATA[3].photo }} style={styles.webImage} />
              </TouchableOpacity>
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Text style={styles.dataName}>{DATA[3].name}</Text>
              </View>
            </View>
          </Swiper>

          <View style={styles.textEspace}></View>
          {/*les textes et titres sont stocké dans un fichier json resources*/}
          <Text style={styles.aProposTitre}>{nous.titre}</Text>
          <Text style={styles.textEspace}></Text>
          <Text style={styles.presentationGourmandise}>{nous.notreHistoire}</Text>
        </ScrollView>
</View>
  );
}
