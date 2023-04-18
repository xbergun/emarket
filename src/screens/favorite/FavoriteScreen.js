import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

const FavoriteScreen = () => {
  const products = useSelector((state) => state?.basket?.products);
  return (
    <View>
     {
      products && 
      <FlatList 
        data={products}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
     }
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({})