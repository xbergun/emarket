import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'native-base'

const Basket = () => {

  const products = useSelector(state => state?.basket?.products)

  return (
    <View style={{
      margin:15,
      height: '100%',
    }}>
      {
        products?.length > 0 ? (
          products.map((product) => (
            <Text key={product.id}>{product?.name} - {product?.quantity}</Text>
          ))
        ) : (
          <Text>There are no products in your basket</Text>
        )
      }
    </View>
  )
}

export default Basket

const styles = StyleSheet.create({})