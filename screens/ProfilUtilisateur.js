import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-native-elements";
import { FlatList, Pressable, Text, View, Image, RefreshControl } from "react-native";
import { styles, stylesList } from "../styles/AppStyles";

export default function ProfilUtilisateur({ navigation }) {
    const [sortBy, setSortBy] = useState("name");
    const [filterBy, setFilterBy] = useState("");
    const [data, setData] = useState([]);
    const [sortPressed, setSortPressed] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetchData();
    }, []); // Chargement initial

    useEffect(() => {
        if (sortPressed && sortBy === "name") {
            const sortedData = [...data].sort((a, b) => {
                return a.designation.localeCompare(b.designation);
            });

            setData(sortedData);
            setSortPressed(false);
        }
    }, [sortPressed, sortBy, data]);

    const fetchData = () => {
        setRefreshing(true);

        fetch(
            "https://gourmandise-api.bdessis.v70208.campus-centre.fr/products",
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! Statut : ${response.status}`);
                }
                return response.json();
            })
            .then((newData) => {
                setData(newData);
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des données :",
                    error.message,
                );
            })
            .finally(() => {
                setRefreshing(false);
            });
    };

    const fetchProductDetails = async (productId) => {
        try {
            const response = await fetch(
                `http://94.247.183.122/plesk-site-preview/gourmandise-api.sdupont.v70208.campus-centre.fr/https/94.247.183.122/api/productDetails?id=${productId}`
            );

            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut : ${response.status}`);
            }

            const productDetails = await response.json();
            return productDetails;
        } catch (error) {
            console.error("Erreur lors de la récupération des détails du produit :", error.message);
        }
    };

    const handleProductPress = (item) => {
        navigation.navigate("Fiche produit", {
            productDetails: {
                designation: item.designation,
                descriptif: item.descriptif,
                poids_piece: item.poids_piece,
                quantite: item.quantite,
                photo:
                    item.image ||
                    "https://picsum.photos/200/300", // Image de test
            },
        });
    };

    const handleSortBy = (value) => {
        setSortBy(value);
        if (value === "name") {
            setSortPressed(true);
        }
    };

    const handleFilterBy = (value) => {
        setFilterBy(value);
    };

    const onRefresh = () => {
        fetchData();
    };

    const buttons = ["Nom", "Catégorie"];

    const buttonStyles = {
        containerStyle: { height: 40 },
        buttonStyle: { backgroundColor: "sienna" },
        textStyle: { color: "white" },
    };



    return (
        <View style={styles.containerProduits}>

        </View>
    );
}
