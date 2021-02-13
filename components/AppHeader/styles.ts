import { StyleSheet } from "react-native";

export const appHeaderStyles = StyleSheet.create({
  header: {
    width: "100%",
    height: 200,
    backgroundColor: "#343d52",
    justifyContent: "flex-start",
    paddingVertical: 35,
  },
  headerItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  ctaButton: {
    width: 150,
    height: 30,
    backgroundColor: "limegreen",
    borderColor: "limegreen",
    borderRadius: 50,
  },
});
