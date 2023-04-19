import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductFilter from "../../../components/search/SearchInput";
import styles from "./HomeScreen.styles";
import getAllProducts from "../../../common/api/products/getAllProducts";
import { useSelector } from "react-redux";
import { API_STATUS } from "../../../common/apiStatus";
import { FlatList, HStack } from "native-base";
import ProductsRenderItem from "../../../components/products/productsRender/ProductsRenderItem";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { HOME_STACK_ROUTES } from "../../../navigations/constant";

const HomeScreen = () => {
  // useSelector's
  const { allProducts, getAllProductsDataApiStatus } = useSelector(
    (state) => state.products
  );
  const { sortBy } = useSelector((state) => state.filter);

  // useState's
  const [filterText, setFilterText] = useState("");
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(12);
  const [data, setData] = React.useState();
  
  // Definations
  const navigation = useNavigation();


  // useEffect's
  useEffect(() => {
    getAllProducts(page, perPage, sortBy, filterText);
  }, [sortBy, filterText]);

  useEffect(() => {
    setData(allProducts);
  }, [allProducts]);

  // Functions
  const handleRenderItem = ({ item }) => {
    return <ProductsRenderItem item={item} />;
  };

  const loadMoreData = async () => {
    setPage(page + 1);
    const newData = await getAllProducts(page + 1, perPage);
    setData([...data, ...newData]);
  };

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  const handleGoToFilterScreen = () => {
    navigation.navigate(HOME_STACK_ROUTES.Filter, { navigation });
  };

  return (
   
 
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <ProductFilter onFilterChange={handleFilterChange} />
      </View>

      <HStack
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginVertical: 14,
        }}
      >
        <Text style={styles.filterText}>Filters:</Text>

        <Button
          title="Select Filter"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={handleGoToFilterScreen}
        />
      </HStack>

      <FlatList
        data={data}
        numColumns={2}
        renderItem={handleRenderItem}
        keyExtractor={(item) => parseInt(item?.id)}
        key={Math.random().toString(12)}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default HomeScreen;
