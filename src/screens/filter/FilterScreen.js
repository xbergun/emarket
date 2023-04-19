import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RadioButtonGroup from "../../components/radioButton/RadioButtonGroup";
import { VStack } from "native-base";
import { Divider } from "native-base";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import CheckBoxList from "../../components/checkbox/CheckBoxList";
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
  const navigation = useNavigation();

  const handleApplyFilter = () => navigation.goBack();

  const [brandFilters, setBrandFilters] = useState(brandOptions);
const [modelFilters, setModelFilters] = useState([]);

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
