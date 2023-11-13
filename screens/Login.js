import React, { useState } from "react";
import {
    Button,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { styles} from "../styles/AppStyles";
import LogoImage from "../assets/logogourmandise.png";

export default function Login({ navigation }) {
    const [mail, setMail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");

    async function saveToken(key, value) {
        await SecureStore.setItemAsync(key, value);
    }

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mail, motdepasse }),
            });
            if (response.ok) {
                const data = await response.json();
                //Stocker le token de SecureStorage
                await saveToken("token", data.token);

                // Redirection vers la page qu'on souhaite
                // navigation.navigate("Espace Client");
            }
        } catch (error) {
            console.error("Erreur :", error);
        }
    };

    const navigateToRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            {/*<Image source={LogoImage} />*/}
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

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.forgotPasswordText}>Pas de compte ? S'inscrire</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView>
    );
}


