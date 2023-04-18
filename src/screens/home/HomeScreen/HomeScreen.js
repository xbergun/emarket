import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductFilter from "../../../components/search/SearchInput";
import styles from "./HomeScreen.styles";
import getAllProducts from "../../../common/api/products/getAllProducts";
import { useSelector } from "react-redux";
import { API_STATUS } from "../../../common/apiStatus";
import { FlatList } from "native-base";
import ProductsRenderItem from "../../../components/products/productsRender/ProductsRenderItem";

const HomeScreen = () => {
  const { allProducts, getAllProductsDataApiStatus } = useSelector(
    (state) => state.products
  );

  const [filterText, setFilterText] = useState("");
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(12);
  const [data, setData] = React.useState();

  useEffect(() => {
    getAllProducts(page, perPage);
  }, []);

  useEffect(() => {
    setData(allProducts);
  }, [allProducts]);

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

  return getAllProductsDataApiStatus === API_STATUS.REQUEST ? (
    <Text>Loading...</Text>
  ) : (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <ProductFilter onFilterChange={handleFilterChange} />
      </View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={handleRenderItem}
        key={Math.random().toString(12)}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default HomeScreen;
