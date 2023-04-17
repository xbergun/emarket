import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ProductFilter from '../../../components/search/SearchInput';
import styles from './HomeScreen.styles';
import Products from '../../../components/products/Products';
import { useNavigation } from '@react-navigation/native';
import CustomIcon from '../../../components/icon/CustomIcon';

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"

const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    image: 'https://picsum.photos/200/300',
    description: lorem
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    image: 'https://picsum.photos/200/300',
    description: lorem
  },
  {
    id: '3',
    name: 'Product 3',
    price: 300,
    image: 'https://picsum.photos/200/300',
    description: lorem
  },
  {
    id: '4',
    name: 'Product 4',
    price: 400,
    image: 'https://picsum.photos/200/300',
    description: lorem
  },
  {
    id: '5',
    name: 'Product 5',
    price: 500,
    image: 'https://picsum.photos/200/300',
    description: lorem
  },
  {
    id: '6',
    name: 'Product 6',
    price: 600,
    image: 'https://picsum.photos/200/300',
    description: lorem
  },
  {
    id: '7',
    name: 'Product 7',
    price: 700,
    image: 'https://picsum.photos/200/300',
    description: lorem
  },

];

const HomeScreen = () => {

  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <ProductFilter onFilterChange={handleFilterChange} />
      </View>
      <Products products={products} />
    </View>
  )
}



export default HomeScreen
