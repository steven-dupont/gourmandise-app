import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "../styles/AppStyles";

export default function Register() {
  const [mail, setMail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const [confirmmdp, setConfirmMdp] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.sousTitre}>
        Voici l'espace d'inscription de Gourmandise.
      </Text>
      <Text style={styles.texte}>
        Les inscription sont sécurisées lors de l'envoi des informations.
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

      <Text style={styles.label}>Confirmer votre mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirmez votre mot de passe"
        onChangeText={(val) => setConfirmMdp(val)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    //     ajouter les autres formulaires
  );
}
