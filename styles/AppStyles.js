import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    height: 100,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    height: 100,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "sienna",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  forgotPasswordText: {
    color: "blue",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  textEspace: {
    height: 10,
  },

  textEspace2: {
    height: 20,
  },

  sousTitre: {
    fontStyle: "italic",
    fontSize: 20,
    textAlign: "center",
    bottom: 120,
  },

  aProposTitre: {
    fontStyle: "italic",
    fontSize: 20,
    textAlign: "center",
  },

  texte: {
    fontStyle: "italic",
    fontSize: 17,
    textAlign: "center",
    bottom: 100,
  },

  presentationGourmandise: {
    fontStyle: "italic",
    fontSize: 17,
    textAlign: "center",
    color: "sienna",
  },

  containerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  positionRecherche: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  formulaireRecherche: {
    height: 40,
    borderColor: "gray",
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
    padding: 8,
  },
  btn_search: {
    backgroundColor: "sienna", // couleur de fond du bouton
    padding: 10, // ajout de rembourrage pour un meilleur aspect
    borderRadius: 5, // coins arrondis
    alignItems: "center", // alignement du contenu au centre
    justifyContent: "center", // alignement du contenu au centre
  },
  btn_search_text: {
    color: "white",
    fontSize: 16,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 202,
  },
  wrapper: {
    height: 300,
    marginTop: -80,
  },
  wrapper2: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  photo1: {
    width: 300,
    height: 150,
    marginTop: 100,
  },
  photo2: {
    width: 300,
    height: 150,
    marginTop: 100,
  },
  texteProduitPhare: {
    textAlign: "center",
    fontSize: 20,
  },
  dataSlide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    marginTop: 50,
  },
  webImage: {
    width: 300,
    height: 200,
  },
  logoGourmandise: {
    width: 200,
    height: 200,
    resizeMode: "contain", // ou 'contain' selon vos préférences
    justifyContent: "center", // Centre les éléments verticalement
    alignItems: "center", // Centre les éléments horizontalement
  },
});
