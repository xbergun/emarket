import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { HOME_STACK_ROUTES } from '../../../navigations/constant';

const ProductsRenderItem = ({ item }) => {
  
  const navigation = useNavigation();

  const handleOnProductDetail = () => {
    navigation.navigate(HOME_STACK_ROUTES.ProductDetail, { item });
  };

  return (
    <Card containerStyle={styles.card}>
      <TouchableOpacity onPress={handleOnProductDetail}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.price}>{item.price} ₺</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Button
        title="Add to Cart"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => {
          console.log('Add to cart', item?.id);
        }}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  card: {
    width: '45%',
    margin: '2.5%',
    marginBottom: 20,
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  image: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 10,

  },
  price: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 17,
    color: '#2A59FE',
  },
  button: {
    backgroundColor: '#2A59FE',
    borderRadius: 4,
    padding: 10,
  },
});

export default ProductsRenderItem;