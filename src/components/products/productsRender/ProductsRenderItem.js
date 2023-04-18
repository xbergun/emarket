import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";
import { HOME_STACK_ROUTES } from "../../../navigations/constant";
import { useSelector } from "react-redux";
import { store } from "../../../store/store";
import { addProduct } from "../../../store/slices/BasketSlice";

const ProductsRenderItem = ({ item }) => {
  const navigation = useNavigation();

  const handleOnProductDetail = () => {
    navigation.navigate(HOME_STACK_ROUTES.ProductDetail, { item, navigation });
  };

  const handleAddToBasket = () => {
    try {
      const { id, name, price } = item;
      store.dispatch(addProduct({ id, name, price }));
      alert("Product added to cart");
    } catch (err) {
      alert("Error");
    }

  };

  return (
    <Card containerStyle={styles.card}>
      <TouchableOpacity onPress={handleOnProductDetail}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.price}>{item.price} ₺</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Button
        title="Add to Cart"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={handleAddToBasket}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5FCFF",
  },
  card: {
    width: "45%",
    margin: "2.5%",
    marginBottom: 20,
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  image: {
    height: 150,
    width: "100%",
    resizeMode: "cover",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 17,
    color: "#2A59FE",
  },
  button: {
    backgroundColor: "#2A59FE",
    borderRadius: 4,
    padding: 10,
  },
});

export default ProductsRenderItem;
