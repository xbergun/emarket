//React
import React from "react";
// React Native
import { Text, TouchableOpacity, View } from "react-native";
// Redux
import { store } from "../../../store/store";
import { addProduct, removeProduct } from "../../../store/slices/BasketSlice";
// styles
import { styles } from "./BasketContent.styles";

const BasketContent = ({ item }) => {
  
  // Functions
  const decreaseQuantity = (id) => {
    store.dispatch(removeProduct({ id, quantity: -1 }));
  };

  const increaseQuantity = (id) => {
    store.dispatch(addProduct({ id, quantity: 1 }));
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer} key={item.id}>
        <View style={styles.leftContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price} TL</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => decreaseQuantity(item.id)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => increaseQuantity(item.id)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BasketContent;
