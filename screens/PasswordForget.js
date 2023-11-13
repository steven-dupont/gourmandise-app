import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../styles/AppStyles";
import { useNavigation } from "@react-navigation/native";

export default function PasswordForget() {
  const navigation = useNavigation();
  const [mail, setMail] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.sousTitre}>Récupération du mot de passe</Text>
      <Text style={styles.texte}>
        Un code vous sera envoyé par mail afin de récupérer votre mot de passe
      </Text>
      <Text style={styles.label}>Adresse mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre adresse mail"
        onChangeText={(val) => setMail(val)}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Envoyer un mail</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
