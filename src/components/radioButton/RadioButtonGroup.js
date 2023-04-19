import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { useSelector } from "react-redux";
import { store } from "../../store/store";
import { setSortBy } from "../../store/slices/FilterSlice";

const COLOR = "#2A59FE";
const BORDER_SIZE = 3;

const RadioButtonGroup = () => {
  const { sortBy } = useSelector((state) => state.filter);

  const [radioButtons, setRadioButtons] = useState([
    {
      id: "1",
      label: "Old to New",
      value: {
        sortBy: "createdAt",
        order: "desc",
      },
      borderSize: BORDER_SIZE,
      borderColor: COLOR,
      color: COLOR,
      selected: sortBy.sortBy === "createdAt" && sortBy.order === "desc",
    },
    {
      id: "2",
      label: "New to Old",
      value: {
        sortBy: "createdAt",
        order: "asc",
      },
      borderColor: COLOR,
      color: COLOR,
      borderSize: BORDER_SIZE,
      selected: sortBy.sortBy === "createdAt" && sortBy.order === "asc",
    },
    {
      id: "3",
      label: "Price High to Low",
      value: {
        sortBy: "price",
        order: "desc",
      },
      borderColor: COLOR,
      color: COLOR,
      borderSize: BORDER_SIZE,
      selected: sortBy.sortBy === "price" && sortBy.order === "desc",
    },
    {
      id: "4",
      label: "Price Low to High",
      value: {
        sortBy: "price",
        order: "asc",
      },
      borderColor: COLOR,
      color: COLOR,
      borderSize: BORDER_SIZE,
      selected: sortBy.sortBy === "price" && sortBy.order === "asc",
    },
  ]);

  function onPressRadioButton(radioButtonsArray) {
    store.dispatch(
      setSortBy(radioButtonsArray.find((radio) => radio.selected).value)
    );
    setRadioButtons(radioButtonsArray);
  }

  return (
    <RadioGroup
      containerStyle={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
      radioButtons={radioButtons}
      onPress={onPressRadioButton}
    />
  );
};

export default RadioButtonGroup;

const styles = StyleSheet.create({
  buttons: {
    borderColor: "red",
  },
});
