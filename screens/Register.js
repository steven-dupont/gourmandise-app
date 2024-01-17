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
  const [mail, setMail] = useState("");
  const [motdepasse, setMotdepasse] = useState("");
  const [confirmmdp, setConfirmMdp] = useState("");
  const [nomPrenom, setNomPrenom] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleInscription = async () => {
    try {
      const response = await fetch(
        "http://94.247.183.122/plesk-site-preview/gourmandise-api.sdupont.v70208.campus-centre.fr/https/94.247.183.122/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: mail,
            nom: nomPrenom,
            ville: ville,
            codePostal: codePostal,
            telephone: telephone,
            motdepasse: motdepasse,
          }),
        },
      );

      if (response.status === 201) {
        console.log("Utilisateur enregistré avec succès.");
        // Vous pouvez effectuer des actions supplémentaires ici (navigation, message de succès, etc.).
      } else {
        console.log("Erreur lors de de l'enregistrement de l'utilisateur:");
        // Vous pouvez gérer les erreurs ici.
      }
    } catch (error) {
      console.error("Erreur lors de la requête d'inscription:", error);
      // Vous pouvez gérer les erreurs réseau ici.
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.containerInscription}>
      <View tyle={{ flex: 1 }}>
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

          <Text style={styles.label}>Confirmer votre mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmez votre mot de passe"
            onChangeText={(val) => setConfirmMdp(val)}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={handleInscription}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
