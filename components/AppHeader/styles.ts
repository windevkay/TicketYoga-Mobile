import { StyleSheet } from "react-native";

export const appHeaderStyles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    padding: 15,
  },
  headerItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerButtons: {
    flexDirection: "row",
  },
  logo: {
    width: 50,
    height: 50,
  },
  ctaButton: {
    width: 90,
    height: 30,
    backgroundColor: "limegreen",
    borderColor: "limegreen",
    borderRadius: 50,
  },
});
