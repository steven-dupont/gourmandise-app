import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import {
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./component/Navigation";

export default function App() {
    const StackNav = createNativeStackNavigator();

    /*Laisse en place le splash creen pendant qu'on récupère les ressources nécessaires */
    SplashScreen.preventAutoHideAsync();

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                //Chargement des fonts
                await Font.loadAsync({ Inter_400Regular, Inter_600SemiBold });
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
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <Navigation />
        </View>
    );
}
