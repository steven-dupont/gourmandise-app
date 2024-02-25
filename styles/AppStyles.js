import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    height: 100,
  },
  containerInscription: {
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
    marginTop: 20,
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
    marginTop: 20,
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
  btn_search_active:{
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
    justifyContent: "right",
    alignItems: "center",
    height: 200,
  },
  photo1: {
    // width: 300,
    height: 150,
    marginTop: 100,
    maxWidth: 300,
  },
  photo2: {
    width: 300,
    height: 150,
    marginTop: 100,
  },
  photoSlide: {
    width: 300,
    height: 150,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoSlideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    maxHeight: 300,
    marginBottom: 180,
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
  containerProduits: {
    flex: 1,
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalError: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  texteModal: {
    color:"white",
  },
  item: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  imageProduits: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  titleProduits: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dataName: {},
  columnWrapper: {},
  tri: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  logoGourmandiseTopBar: {
    width: 50,
    height: 50,
  },

  positionRechercheTopBar: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // Utilisation de flex pour que la zone de recherche s'adapte à l'écran
  },
});

export const stylesList = StyleSheet.create({
  container: {
    maxHeight: 192,
  },
  item: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    elevation: 5, // Pour Android
    shadowColor: "sienna", // Pour iOS
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 8, // Bordure arrondie
    height: 200, // Définissez la taille souhaitée ici
    width: 170,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "sienna", // Couleur personnalisée
    marginBottom: 8, // Ajout d'une marge inférieure
    textAlign: "center",
  },

  imageProduits: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  imageProduitsCommande: {
    width: "100%",
    height: 75,
    resizeMode: "cover",
    borderRadius: 8,
  },

  columnText: {
    fontSize: 14,
    color: 'black',
  },

});

export const stylesFiche = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "stretch",
  },
  cardHaut: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    elevation: 5, // Pour Android
    shadowColor: "sienna", // Pour iOS
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 8, // Bordure arrondie
    alignItems: "stretch",
  },
  cardBas: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    elevation: 5, // Pour Android
    shadowColor: "sienna", // Pour iOS
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 8, // Bordure arrondie
    alignItems: "stretch",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },

  textetitre: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "red",
  },
  imageProduits: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginTop: 16,
  },
  ajouterProduit: {
    marginTop: 20,
    backgroundColor: "sienna",
    color: "yellow",
  },
  avisClient: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    elevation: 5, // Pour Android
    shadowColor: "sienna", // Pour iOS
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 8, // Bordure arrondie
    height: 200, // Définissez la taille souhaitée ici
    width: 170,
  },

  //CARD UI KITTEN

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
