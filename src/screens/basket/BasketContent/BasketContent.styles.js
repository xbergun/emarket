import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  button: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#2A59FE",
    color: "white",
  },
  totalPriceContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: "auto",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
