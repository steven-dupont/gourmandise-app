import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from "react-native";
import { styles } from "../styles/AppStyles";

export default function Register() {
  const [email, setMail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const [nom, setNomPrenom] = useState("");
  const [cp, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [adrLivraison, setadrLivraison] = useState("");

  const showAlertMessage = (message) => {
    alert(message);
  };

  const handleInscription = async () => {
    try {
      const response = await fetch(
          "https://gourmandise-api.bdessis.v70208.campus-centre.fr/register",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nom: nom,
              adresse: adresse,
              cp: cp,
              ville: ville,
              telephone: telephone,
              motdepasse: motdepasse,
              email: email,
              adrLivraison: adrLivraison,
            }),
          }
      );

      if (response.status === 201) {
        showAlertMessage("Utilisateur enregistré avec succès.");
        // Vous pouvez effectuer des actions supplémentaires ici (navigation, message de succès, etc.).
      } else {
        showAlertMessage(
            "Erreur lors de l'enregistrement de l'utilisateur"
        );
        // Vous pouvez gérer les erreurs ici.
      }
    } catch (error) {
      showAlertMessage("Erreur lors de la requête d'inscription", error);
      // Vous pouvez gérer les erreurs réseau ici.
    }
  };

  return (
      <KeyboardAvoidingView behavior="height" style={styles.containerInscription}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
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

            <Text style={styles.label}>Nom et Prénom</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom et Prénom"
                onChangeText={(val) => setNomPrenom(val)}
            />

            <Text style={styles.label}>Ville</Text>
            <TextInput
                style={styles.input}
                placeholder="Ville"
                onChangeText={(val) => setVille(val)}
            />

            <Text style={styles.label}>Code postal</Text>
            <TextInput
                style={styles.input}
                placeholder="Code postal"
                onChangeText={(val) => setCodePostal(val)}
            />

            <Text style={styles.label}>Telephone</Text>
            <TextInput
                style={styles.input}
                placeholder="Telephone"
                onChangeText={(val) => setTelephone(val)}
            />

            <Text style={styles.label}>Mot de passe</Text>
            <TextInput
                style={styles.input}
                placeholder="Entrez votre mot de passe"
                onChangeText={(val) => setMotdepasse(val)}
                secureTextEntry={true}
            />

            <Text style={styles.label}>Entrez votre adresse </Text>
            <TextInput
                style={styles.input}
                placeholder="Adresse"
                onChangeText={(val) => setAdresse(val)}
            />

            <Text style={styles.label}>Entrez votre adresse de livraison</Text>
            <TextInput
                style={styles.input}
                placeholder="adresse de livraison"
                onChangeText={(val) => setadrLivraison(val)}
            />

            <TouchableOpacity style={styles.button} onPress={handleInscription}>
              <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
  );
}
