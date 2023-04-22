import "react-native";
import React from "react";
import HomeScreen from "../screens/home/HomeScreen/HomeScreen";

import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
