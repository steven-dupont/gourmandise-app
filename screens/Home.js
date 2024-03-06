import React, {useContext, useState} from "react";
import {
    Text,
    TextInput,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from "react-native";
import {styles, stylesFiche} from "../styles/AppStyles";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Swiper from "react-native-swiper";
import {SwiperFlatList} from "react-native-swiper-flatlist";
import {Icon} from "@ui-kitten/components";
import resource from "../resources/resource.json";
import {Entypo} from "@expo/vector-icons";
import {AuthContext} from "../component/AuthContext";

const Stack = createNativeStackNavigator();

export default function Home({navigation, route}) {
    const productDetails = route.params?.productDetails;
    const [searchQuery, setSearchQuery] = useState("");
    const {signIn, isLoggedIn} = useContext(AuthContext);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Fonction de recherche
    const handleSearch = () => {
        console.log("Recherche effectuée avec la requête :", searchQuery);
        // Filtrer les produits en fonction de la désignation
        const filtered = DATA.filter((product) =>
            product.designation.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const nous = resource.nous[0];
    const DATA = [
        {
            id: 1,
            name: "Barre de chocolat au lait",
            description: "Une délicieuse barre de chocolat au lait.",
            photo:
            // "https://cdn.pixabay.com/photo/2013/09/18/18/24/chocolate-183543_1280.jpg",
                "https://image.noelshack.com/fichiers/2024/10/3/1709734609-hub-actu-800x480chocolat-noel-ferrero-collection-2023-s46-1.jpg",
            fallbackPhoto: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            name: "Truffes au chocolat noir",
            description: "Des truffes fondantes au chocolat noir de haute qualité.",
            photo:
            // "https://cdn.pixabay.com/photo/2022/01/15/19/29/chocolate-6940529_1280.jpg",
                "https://image.noelshack.com/fichiers/2024/10/3/1709735007-remise-sur-toutes-les-commandes-sur-le-site-de-revillon-chocolatier.jpg"
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
        {
            id: 5,
            name: "Promo chocolat",
            description: "De délicieuses promo.",
            photo:
                "https://ibb.co/0ms9kWc",
        },


    ];

    const handleProductPress = () => {
        navigation.navigate("Nos produits");
    };
    console.log("acceuil console log:" + isLoggedIn);
    return (
        <View>
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
                        <Entypo name="magnifying-glass" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>

            {/*Zone des flatlist*/}
            <FlatList
                horizontal
                data={DATA.slice(0, 2)} // Sélectionnez les deux premières images pour le slider
                renderItem={({item}) => (
                    <View style={{width: Dimensions.get('window').width}}>
                        <Image source={{uri: item.photo || item.fallbackPhoto}} style={{width: '100%', height: 200}}/>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <View style={stylesFiche.cardAcceuil}>
                <Text>{nous.titre}</Text>
                <Text>{nous.notreHistoire}</Text>
            </View>
        </View>
    );
}
