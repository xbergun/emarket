import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FlatList, HStack, ScrollView, VStack } from "native-base";
import BasketContent from "./BasketContent/BasketContent";
import { Button } from "react-native-elements";
import { styles } from "./Basket.styles";
import { TotalPrice } from "../../helpers/TotalPrice";
const Basket = () => {
  const products = useSelector((state) => state?.basket?.products);

  const totalPrice = TotalPrice(products);

  return (
    <>
      <ScrollView>
        {products.length > 0 ? (
          products.map((item) => {
            return <BasketContent key={item?.id} item={item} />;
          })
        ) : (
          <Text style={styles.empty}>Empty</Text>
        )}
      </ScrollView>
      <HStack style={styles.priceContainer}>
        <VStack>
          <Text style={styles.totalPrice}>Total: </Text>

          <Text style={styles.totalPriceValue}>{totalPrice}₺</Text>
        </VStack>

        <Button
          title="Complete"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={() => {}}
        />
      </HStack>
    </>
  );
};

export default Basket;
