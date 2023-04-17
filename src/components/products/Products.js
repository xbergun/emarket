import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductsRenderItem from './productsRender/ProductsRenderItem';

const Products = ({products}) => {


    const handleRenderItem = ({item}) => {
        return <ProductsRenderItem item={item} />;
    };

  return (
    <FlatList
        data={products}
        numColumns={2}
        renderItem={handleRenderItem}
        key={Math.random().toString(12)}
    />
  )
}

export default Products

const styles = StyleSheet.create({})