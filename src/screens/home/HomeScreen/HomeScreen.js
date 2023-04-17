import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ProductFilter from '../../../components/search/SearchInput';
import styles from './HomeScreen.styles';
import Products from '../../../components/products/Products';

const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 300,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: '4',
    name: 'Product 4',
    price: 400,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: '5',
    name: 'Product 5',
    price: 500,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: '6',
    name: 'Product 6',
    price: 600,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: '7',
    name: 'Product 7',
    price: 700,
    image: 'https://picsum.photos/200/300',
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
