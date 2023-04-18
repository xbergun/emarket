import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomIcon from "../icon/CustomIcon";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/slices/FavoriteSlice";

const FavoriteButton = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(item));

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item));
      setIsFavorite(false);
    } else {
      dispatch(addFavorite(item));
      setIsFavorite(true);
    }
  };

  return (
    <TouchableOpacity onPress={handleFavorite} style={styles.container}>
      <View>
        <CustomIcon
          iconName={isFavorite ? "star" : "star-outline"}
          size={6}
          color={isFavorite ? "#FFB800" : "#D9D9D9"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default FavoriteButton;
