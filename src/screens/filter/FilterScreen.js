// React
import React, { useState } from "react";

// React Native
import { StyleSheet, Text, View } from "react-native";

// Library
import { VStack, Divider } from "native-base";
import { Button } from "react-native-elements";

// navigation
import { useNavigation } from "@react-navigation/native";

// components
import CheckBoxList from "../../components/checkbox/CheckBoxList";
import RadioButtonGroup from "../../components/radioButton/RadioButtonGroup";
import ProductFilter from "../../components/search/SearchInput";

const brandOptions = [
  "Apple",
  "Chrysler",
  "Ford",
  "Honda",
  "Hyundai",
  "Kia",
  "Mazda",
  "Mercedes",
  "Polestar",
  "Tesla",
  "Toyota",
  "Volkswagen",
];

const modelOptions = [
  "11",
  "11 Pro",
  "11 Pro Max",
  "12",
  "12 Pro",
  "12 Pro Max",
  "13",
  "13 Pro",
  "13 Pro Max",
  "14",
  "14 Pro",
  "14 Pro Max",
];

const FilterScreen = () => {
  //useState's
  const [brandFilters, setBrandFilters] = useState(brandOptions);
  const [modelFilters, setModelFilters] = useState([]);

  // definations
  const navigation = useNavigation();

  // functions
  const handleApplyFilter = () => navigation.goBack();

  const handleBrandFilter = (brand) => {
    if (brandFilters.includes(brand)) {
      setBrandFilters(brandFilters.filter((item) => item !== brand));
    } else {
      setBrandFilters([...brandFilters, brand]);
    }
  };

  return (
    <VStack
      space={3}
      style={{
        marginHorizontal: 20,
        marginVertical: 14,
      }}
    >
      <VStack space={3}>
        <Text>Sort By</Text>
        <RadioButtonGroup />
        <Divider h={0.5} />
      </VStack>

      <VStack space={3}>
        <Text>Brand</Text>
        <ProductFilter onFilterChange={handleBrandFilter} type={"filter"} />
        <CheckBoxList options={brandOptions} type={"brand"} />
        <Divider h={0.5} />
      </VStack>

      <VStack space={3}>
        <Text>Model</Text>
        <ProductFilter type={"filter"} />
        <CheckBoxList options={modelOptions} type={"model"} />
        <Divider h={0.5} />
      </VStack>

      <Button
        title="Apply"
        containerStyle={{
          marginVertical: 20,
        }}
        onPress={handleApplyFilter}
      />
    </VStack>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({});
