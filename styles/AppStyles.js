import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
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
  sousTitre: {
    fontStyle: "italic",
    fontSize: "20",
    textAlign: "center",
    bottom: 120,
  },
  texte: {
    fontStyle: "italic",
    fontSize: "17",
    textAlign: "center",
    bottom: 100,
  },
  containerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 60,
  },
});
