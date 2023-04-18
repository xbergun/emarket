import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HStack, VStack } from 'native-base'
import BasketIncrementDecrement from '../../../components/basket/BasketIncrementDecrement'

const BasketContent = ({item}) => {
    console.log(item)
  return (
    <HStack style={{
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'space-between'

    }}>
      <VStack>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </VStack>
      <HStack>
        <BasketIncrementDecrement  />
        <Text>{item.quantity}</Text>
        <BasketIncrementDecrement increment={true} />
      </HStack>
    </HStack>
  )
}

export default BasketContent

const styles = StyleSheet.create({})