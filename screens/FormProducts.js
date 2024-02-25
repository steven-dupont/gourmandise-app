import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { styles, stylesFiche, stylesList } from "../styles/AppStyles";
import { SwiperFlatList } from "react-native-swiper-flatlist";

export default function FormProducts({ route }) {
    const productDetails = route.params?.productDetails;
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (isModalVisible) {

            const timer = setTimeout(() => {
                console.log("Fermeture automatique de la modal après 2 secondes");
                // Fermer la modal après le délai spécifié
                toggleModal();
            }, 2000);


            return () => clearTimeout(timer);
        }
    }, [isModalVisible]);

    const handleAddToCart = () => {
        // Afficher la modal
        toggleModal();
    };

    const handlePromotion = () => {
        // Traiter la promotion ici
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={stylesFiche.container}>
            <View style={stylesFiche.cardHaut}>
                <Text style={stylesFiche.title}>{productDetails.designation}</Text>
                <Image
                    style={stylesList.imageProduits}
                    source={{
                        uri:
                            productDetails.photo ||
                            "https://cdn.pixabay.com/photo/2022/01/15/19/29/chocolate-6940529_1280.jpg",
                    }}
                />
                <Text style={stylesFiche.text}>{productDetails.descriptif}</Text>
                <Text style={stylesFiche.text}>
                    Quantite disponible: {productDetails.quantite} produit(s)
                </Text>

                <View>
                    <TouchableOpacity style={styles.btn_search} onPress={handleAddToCart}>
                        <Text style={styles.btn_search_text}>Ajouter au panier</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={stylesFiche.cardBas}>
                <Text style={stylesFiche.title}>Produits en promotion</Text>
                <Text style={stylesFiche.text}>Pour une durée limitée !</Text>
                <SwiperFlatList>
                    <View style={styles.photoSlide}>
                        <Image
                            source={require("../assets/dispo.jpg")}
                            style={styles.photoSlideImage}
                        />
                    </View>
                </SwiperFlatList>
                <TouchableOpacity style={styles.btn_search} onPress={handlePromotion}>
                    <Text style={styles.btn_search_text}>Promotion</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.texteModal}>Produit ajouté au panier !</Text>
                        <TouchableOpacity onPress={toggleModal}>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}