import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-native-elements";
import { FlatList, Pressable, Text, View, Image, RefreshControl } from "react-native";
import { styles, stylesList } from "../styles/AppStyles";

export default function CommandeList({ navigation }) {
    const [sortBy, setSortBy] = useState("name");
    const [filterBy, setFilterBy] = useState("");
    const [data, setData] = useState([]);
    const [sortPressed, setSortPressed] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [defaultSort, setDefaultSort] = useState("name");
    

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

    useEffect(() => {
        if (defaultSort === "name") {
            fetchData();
        } else if (defaultSort === "periode") {

            const sortedDataByPeriode = [...data].sort((a, b) => {


                return a.periode.localeCompare(b.periode);
            });

            setData(sortedDataByPeriode);
        }
    }, [defaultSort]);

    const fetchData = () => {
        setRefreshing(true);

        fetch(
            "http://94.247.183.122/plesk-site-preview/gourmandise-api.sdupont.v70208.campus-centre.fr/https/94.247.183.122/api/products",
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
                commande: item.nbr_commande,
                periode: item.periode,
                photo:
                    item.image ||
                    "https://picsum.photos/200/300", // Image de test
            },
        });
    };

    const handleSortBy = (value) => {
        setSortBy(value);
        setDefaultSort(value);
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

    const buttons = ["Meilleur vente", "Catégorie"];

    const buttonStyles = {
        containerStyle: { height: 40 },
        buttonStyle: { backgroundColor: "sienna" },
        textStyle: { color: "white" },
    };

    const renderProducts = ({ item }) => (
         <Pressable>
               <View style={stylesList.item}>
                   <Text style={stylesList.title}>{item.designation}</Text>
                   <View style={styles.columnContainer}>
                   <Text style={styles.columnText}>{`Nombre de commandes : ${item.nbr_commande}`}</Text>
                   <Text style={styles.columnText}>{`Meilleure période du produit : ${item.periode}`}</Text>
                   </View>
                   <Image
                       style={stylesList.imageProduitsCommande}
                       source={{
                           uri: item.image || "https://picsum.photos/200/300",
                       }}
                   />
               </View>
           </Pressable>
    );

    return (
        <View style={styles.containerProduits}>
            <ButtonGroup
                onPress={(selectedIndex) => {
                    if (selectedIndex === 0) handleSortBy("periode");
                    else if (selectedIndex === 2) handleFilterBy("categorie");
                }}
                buttons={buttons}
                {...buttonStyles}
            />
            <FlatList
                data={data}
                renderItem={renderProducts}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
}
