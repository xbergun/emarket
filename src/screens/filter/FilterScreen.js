import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RadioButtonGroup from "../../components/radioButton/RadioButtonGroup";
import { VStack } from "native-base";
import { Divider } from 'native-base';
import { Button } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';
import { HOME_STACK_ROUTES } from "../../navigations/constant";

const FilterScreen = () => {
const navigation = useNavigation();

  const handleApplyFilter = () => {
    navigation.goBack({
      screen: HOME_STACK_ROUTES.Home,
    });
  };

  return (
    <VStack style={{
      marginHorizontal: 20,
      marginVertical: 14,
    }}>
      <VStack space={5}>
        <Text>Sort By</Text>
        <RadioButtonGroup />
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
