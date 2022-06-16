import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(20, 20, 30)"
  },
  wrapper: {
    flex: 1,
    position: "relative",
  },
  title:{
    color: "white",
    fontSize: 64,
    textAlign: "center",
    marginBottom: 30,
    zIndex: 4
  },
  info:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    textAlign: "center",
    color: "white",
    fontSize: 18,
  }
})