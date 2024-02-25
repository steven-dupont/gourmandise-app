import React, { useState } from "react";
import {
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    Modal,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { styles } from "../styles/AppStyles";
import Swiper from "react-native-swiper";

export default function Login({ navigation }) {
    const [email, setMail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibleError, setModalVisibleError] = useState(false);

    // Utiliser un état pour gérer le message de la modal
    const [modalMessage, setModalMessage] = useState("");

    async function saveToken(key, value) {
        await SecureStore.setItemAsync(key, value);
    }

    const handleLogin = async () => {
        try {
            const response = await fetch(
                "http://94.247.183.122/plesk-site-preview/gourmandise-api.sdupont.v70208.campus-centre.fr/https/94.247.183.122/api/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email, motdepasse: motdepasse }),
                }
            );

            if (response.ok) {
                const data = await response.json();

                // Enregistrement du token dans SecureStore
                await SecureStore.setItemAsync("jwtToken", data.token);

                // Afficher la modal de connexion réussie
                setModalMessage("Vous êtes désormais connecté !");
                setModalVisible(true);

                // Fermer automatiquement la modal après 2 secondes
                setTimeout(() => {
                    setModalVisible(false);
                }, 2000);
            } else {
                // Gérer les cas d'erreur
                console.error("Erreur lors de la connexion:", response.status);

                // Si le serveur renvoie une erreur 500, afficher la modal d'erreur
                if (response.status === 500) {
                    setModalMessage("Le mail ou le mot de passe est incorrect.");
                    setModalVisibleError(true);

                    // Fermer automatiquement la modal d'erreur après 2 secondes
                    setTimeout(() => {
                        setModalVisibleError(false);
                    }, 2000);
                }
            }
        } catch (error) {
            console.error("Erreur lors de la requête de connexion:", error);
        }
    };

    const navigateToRegister = () => {
        navigation.navigate("Register");
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <Text style={styles.sousTitre}>
                    Voici l'espace de connexion de Gourmandise.
                </Text>
                <Text style={styles.texte}>
                    Les connexions sont sécurisées lors de l'envoi des informations.
                </Text>
                <Text style={styles.label}>Adresse mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrez votre adresse mail"
                    onChangeText={(val) => setMail(val)}
                />

                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrez votre mot de passe"
                    onChangeText={(val) => setMotdepasse(val)}
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={() => navigation.navigate("PasswordForget")}>
                    <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
                </TouchableOpacity>

                {/* Ajouter un espace */}
                <View style={styles.textEspace} />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>

                {/* Ajouter un espace */}
                <View style={styles.textEspace} />

                <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
                    <Text style={styles.forgotPasswordText}>
                        Pas de compte ? S'inscrire
                    </Text>
                </TouchableOpacity>

                {/* Modal pour indiquer la connexion réussie */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >0
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.texteModal}>{modalMessage}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/* Modal pour indiquer l'erreur (mail ou mot de passe incorrect) */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisibleError}
                    onRequestClose={() => setModalVisibleError(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalError}>
                            <Text style={styles.texteModal}>{modalMessage}</Text>
                            <TouchableOpacity onPress={() => setModalVisibleError(false)}>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
