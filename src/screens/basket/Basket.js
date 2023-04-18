import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "native-base";
import BasketContent from "./BasketContent/BasketContent";

const Basket = () => {
  const products = useSelector((state) => state?.basket?.products);

  const handleRenderItem = ({ item }) => {
    return <BasketContent item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={handleRenderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.noProductsText}>No products in basket</Text>
        }
      />
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    height: "100%",
  },
  noProductsText: {
    textAlign: "center",
  },
});
