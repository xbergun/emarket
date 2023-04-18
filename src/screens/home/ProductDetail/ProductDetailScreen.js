import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { VStack, HStack } from "native-base";
import { Button } from "react-native-elements";
import { styles } from "./ProductDetailScreen.styles";

import { useNavigation, useRoute } from "@react-navigation/native";
import { store } from "../../../store/store";
import { addProduct } from "../../../store/slices/BasketSlice";

const ProductDetailScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: item.name,
    });
  }, [item.name, navigation]);

  const handleAddToCart = () => {
    try {
      const { id, name, price } = item;
      store.dispatch(addProduct({ id, name, price }));
      alert("Product added to cart");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <VStack style={styles.container}>
      <VStack>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </VStack>

      <HStack style={styles.priceContainer}>
        <VStack>
          <Text style={styles.priceTitle}>Price:</Text>
          <Text style={styles.priceValue}>{item.price} ₺</Text>
        </VStack>

        <Button
          title="Add to Cart"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={handleAddToCart}
        />
      </HStack>
    </VStack>
  );
};

export default ProductDetailScreen;
