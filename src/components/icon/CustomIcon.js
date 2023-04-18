import React from "react";
import { Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomIcon = ({
  size = "2xl",
  iconName,
  color,
  as = MaterialCommunityIcons,
}) => {
  return <Icon as={as} size={size} name={iconName} color={color} />;
};

export default CustomIcon;
