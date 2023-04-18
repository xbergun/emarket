import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import FavoriteContent from "./FavoriteContent/FavoriteContent";

const FavoriteScreen = () => {
  const favorites = useSelector((state) => state.favorites);

  const handleRenderItem = ({ item }) => {
    return <FavoriteContent item={item} />;
  };

  return (
    <View style={{flex:1}}>
      {favorites.length ? (
        <FlatList
          data={favorites}
          renderItem={handleRenderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={{
          justifyContent: "center",
      
        }}>Empty</Text>
      )}
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
