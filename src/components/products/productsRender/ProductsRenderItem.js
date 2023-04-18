import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";
import { HOME_STACK_ROUTES } from "../../../navigations/constant";
import { useSelector } from "react-redux";
import { store } from "../../../store/store";
import { addProduct } from "../../../store/slices/BasketSlice";
import { styles } from "./ProductRenderItem.styles";
import CustomIcon from '../../icon/CustomIcon';
import FavoriteButton from "../../favorite/FavoriteButton";


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
      <FavoriteButton item={item} /> 
    </Card>
  );
};


export default ProductsRenderItem;
