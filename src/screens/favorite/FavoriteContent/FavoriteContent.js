//React
import React from "react";
//React Native
import { Image, Text, View } from "react-native";
// styles
import { styles } from "./FavoriteContent.styles";
// components
import FavoriteButton from "../../../components/favorite/FavoriteButton";

const FavoriteContent = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item?.image }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <FavoriteButton item={item} />
    </View>
  );
};

export default FavoriteContent;
