import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VStack, HStack } from 'native-base';
import { Button } from 'react-native-elements'
import {styles} from './ProductDetailScreen.styles';
const ProductDetailScreen = ({ route }) => {

  const {item} = route.params;

  return (
    <VStack style={styles.container}

    >
      <VStack>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
        <Text style={styles.title}>
          {item.name}
        </Text>
        <Text style={styles.description}>
          {item.description}
        </Text>
      </VStack>

      <HStack style={styles.priceContainer}>
        <VStack>
          <Text style={styles.priceTitle}>Price:</Text>
          <Text style={styles.priceValue}>{item.price} ₺</Text>
        </VStack>

        <Button
          title="Add to Cart"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={() => {
            console.log('Add to cart', item?.id);
          }}
        />
      </HStack>
    </VStack>
  )
}

export default ProductDetailScreen
