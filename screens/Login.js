import React, {useContext, useState} from "react";
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
import {AuthContext} from "../component/AuthContext";

export default function Login({ navigation }) {
    const [email, setMail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibleError, setModalVisibleError] = useState(false);
    const {signIn, isLoggedIn} = useContext(AuthContext);

    // Utiliser un état pour gérer le message de la modal
    const [modalMessage, setModalMessage] = useState("");

    async function saveToken(key, value) {
        await SecureStore.setItemAsync(key, value);
    }

    const handleLogin = async () => {
        try {
            const response = await fetch(
                "https://gourmandise-api.bdessis.v70208.campus-centre.fr/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, motdepasse }),
                }
            );
            console.log(response.status, 'email:' +email, 'mdp:'+motdepasse)

            if (response.ok) {
                const data = await response.json();

                // Enregistrement du token dans SecureStore
                await saveToken("token", data.token);
                console.log("avant login :"+data.token);
                console.log("apres :"+isLoggedIn);
                showAlertMessage('vous êtes bien connecté')
                signIn();
                navigation.reset({index : 0, routes: [{name: "Accueil"}]
                });
            } else {
                if (response.status === 401) {
                    // Gérer les cas d'erreur
                    showAlertMessage('mot de passe ou email incorrect')
            }
                // Si le serveur renvoie une erreur 500, afficher la modal d'erreur
                if (response.status === 500) {
                    showAlertMessage('erreur serveur')
                }
            }
        } catch (error) {
            console.error("Erreur lors de la requête de connexion:", error);
        }
    };

    const showAlertMessage = (message) => {
        alert(message)
    }

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
                {/*<Modal*/}
                {/*    animationType="slide"*/}
                {/*    transparent={true}*/}
                {/*    visible={isModalVisible}*/}
                {/*    onRequestClose={() => setModalVisible(false)}*/}
                {/*>0*/}
                {/*    <View style={styles.modalContainer}>*/}
                {/*        <View style={styles.modalContent}>*/}
                {/*            <Text style={styles.texteModal}>{modalMessage}</Text>*/}
                {/*            <TouchableOpacity onPress={() => setModalVisible(false)}>*/}
                {/*            </TouchableOpacity>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</Modal>*/}

                {/* Modal pour indiquer l'erreur (mail ou mot de passe incorrect) */}
                {/*<Modal*/}
                {/*    animationType="slide"*/}
                {/*    transparent={true}*/}
                {/*    visible={isModalVisibleError}*/}
                {/*    onRequestClose={() => setModalVisibleError(false)}*/}
                {/*>*/}
                {/*    <View style={styles.modalContainer}>*/}
                {/*        <View style={styles.modalError}>*/}
                {/*            <TouchableOpacity onPress={() => setModalVisibleError(false)}>*/}
                {/*            </TouchableOpacity>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</Modal>*/}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
