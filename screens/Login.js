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
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { styles } from "../styles/AppStyles";
import Swiper from "react-native-swiper";

export default function Login({ navigation }) {
  const [email, setMail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");

  async function saveToken(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  const handleLogin = async () => {
    try {

        console.log("Avant la requête",
            email,
            motdepasse,
        );
        console.log(JSON.stringify({email: email, motdepasse: motdepasse,}),)
      const response = await fetch(
        "94.247.183.122/plesk-site-preview/gourmandise-api.sdupont.v70208.campus-centre.fr/https/94.247.183.122/api/register",
        {
          method: "POST",
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify({email: email, motdepasse: motdepasse,}),
        },

      );
      console.log("Après la requête",
            email,
            motdepasse,
        );
      if (response.ok) {
        const data = await response.json();

        // Enregistrement du token dans SecureStore
        await SecureStore.setItemAsync("jwtToken", data.token);
        // // Redirection
        // navigation.navigate("Accueil");
      } else {
        // Gérer les cas d'erreur
        console.error("Erreur lors de la connexion:", response.status);
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
    </KeyboardAvoidingView>
  );
}
