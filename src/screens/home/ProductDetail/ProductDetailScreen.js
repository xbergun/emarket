//React
import React, { useEffect } from "react";
//React Native
import { Image, Text } from "react-native";
//Redux
import { store } from "../../../store/store";
import { addProduct } from "../../../store/slices/BasketSlice";
//Library
import { VStack, HStack } from "native-base";
import { Button } from "react-native-elements";
//styles
import { styles } from "./ProductDetailScreen.styles";
//Navigation
import { useNavigation } from "@react-navigation/native";
//Components
import FavoriteButton from '../../../components/favorite/FavoriteButton';

const ProductDetailScreen = ({ route }) => {
  // Definations
  const { item } = route.params;
  const navigation = useNavigation();

  // useEffect's
  useEffect(() => {
    navigation.setOptions({
      headerTitle: item.name,
    });
  }, [item.name, navigation]);

  // Functions
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
        <FavoriteButton item={item} />
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
