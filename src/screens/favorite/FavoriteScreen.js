//React
import React from "react";
//React Native
import { StyleSheet, Text, View ,FlatList} from "react-native";
//Redux
import { useSelector } from "react-redux";
//Components
import FavoriteContent from "./FavoriteContent/FavoriteContent";

const FavoriteScreen = () => {
  // useSelector's
  const favorites = useSelector((state) => state.favorites);

  // functions
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
