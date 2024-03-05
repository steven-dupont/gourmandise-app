import {StyleSheet, Text, View} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {useCallback, useEffect, useState} from "react";
import * as Font from "expo-font";
import {
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navigation from "./component/Navigation";
import {AuthProvider} from "./component/AuthContext";
import * as SecureStore from "expo-secure-store";

export default function App() {
    const StackNav = createNativeStackNavigator();

    /*Laisse en place le splash creen pendant qu'on récupère les ressources nécessaires */
    SplashScreen.preventAutoHideAsync();

    const [isReady, setIsReady] = useState(false);

    const RetrieveToken = async () => {
        try {
            const storedToken = await SecureStore.getItemAsync("token");
            console.log("app.js storage token:"+storedToken);
            if (storedToken) {
                // Envoi de la requête à l'API pour vérifier le token
                const response = await fetch(
                    "ttps://gourmandise-api.bdessis.v70208.campus-centre.fr/verify-token",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({token: storedToken}),
                    },
                );

                if (response.status === 200) {
                    // Le token est valide
                    console.log("token valide et non-expiré");
                } else if (response.status === 401) {
                    // Le token est expiré ou invalide, donc on le supprime
                    const responseSupp = await SecureStore.deleteItemAsync("token");
                    if (!responseSupp) {
                        console.log(
                            "Le token n'a pas été supprimé du SecureStore car il y a eu un probléme ou que l'application ne posséde pas de token ",
                        );
                    }
                } else {
                    console.error(
                        "La requête de vérification du token a échoué, connexion au serveur indisponible",
                    );
                }
            }
        } catch (error) {
            console.error(
                "Erreur lors du processus de vérification du token ",
                error,
            );
        }
    };







    useEffect(() => {
        async function prepare() {
            try {
                //Chargement des fonts
                await Font.loadAsync({Inter_400Regular, Inter_600SemiBold});
            } catch (e) {
                console.warn(e);
            } finally {
                setIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }

    return (
        <AuthProvider>
            <View onLayout={onLayoutRootView} style={{flex: 1}}>
                <Navigation/>
            </View>
        </AuthProvider>
    );
}
