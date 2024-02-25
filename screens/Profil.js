import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function Profil({ navigation }) {
    const [utilisateur, setUtilisateur] = useState(null);
    const [email, setMail] = useState("");
    const [motdepasse, setMotdepasse] = useState("");
    const [adresse, setAdresse] = useState("");
    const [cp, setCP] = useState("");
    const [ville, setVille] = useState("");
    const [telephone, setTelephone] = useState("");

    useEffect(() => {
        // Fonction pour récupérer les informations de l'utilisateur une fois connecté
        const fetchUserInfo = async () => {
            try {
                // Récupérer le token JWT du SecureStore
                const jwtToken = await SecureStore.getItemAsync('jwtToken');
                if (jwtToken) {
                    // Effectuer une requête pour obtenir les informations de l'utilisateur
                    const response = await fetch(
                        'http://94.247.183.122/plesk-site-preview/gourmandise-api.sdupont.v70208.campus-centre.fr/https/94.247.183.122/api/client/:id',
                        {
                            method: "GET",
                            headers: {'Authorization': 'Bearer ' + jwtToken,},
                            // body: JSON.stringify({email: email, motdepasse: motdepasse,
                            // adresse: adresse, cp: cp, ville: ville, telephone: telephone}),
                    });

                    // Traiter la réponse de la requête
                    const data = await response.json();
                    console.log(data)
                    if (data.status === 'success') {
                        // Mettre à jour les informations de l'utilisateur dans le store
                        await SecureStore.setItemAsync('user', data.data);
                        console.log("succes pr la recup du token")
                    }
                }
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des informations de l\'utilisateur:', error);
            }
        };

        fetchUserInfo(); // Appeler la fonction pour récupérer les informations de l'utilisateur
    }, []);

    return (
        <View>
                // Afficher les informations de l'utilisateur s'il est connecté
                <View>
                    <Text>Bienvenue sur le profil, !</Text>
                    <Text>Email: {utilisateur.email}</Text>
                    {/* Ajoutez d'autres informations de l'utilisateur selon votre structure de données */}
                </View>

                // Afficher un message s'il n'y a pas d'utilisateur connecté
                <Text>Veuillez vous connecter pour accéder au profil.</Text>

        </View>
    );
}
