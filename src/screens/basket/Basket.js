// React
import React from "react";

// React Native
import { Text } from "react-native";

// Redux
import { useSelector } from "react-redux";

// Library
import { HStack, ScrollView, VStack } from "native-base";
import { Button } from "react-native-elements";

// Style
import { styles } from "./Basket.styles";

//helpers
import { TotalPrice } from "../../helpers/TotalPrice";

// Components
import BasketContent from "./BasketContent/BasketContent";

const Basket = () => {
  // useSelector's
  const products = useSelector((state) => state?.basket?.products);

  // functions
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
