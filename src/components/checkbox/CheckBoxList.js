import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { ScrollView } from 'native-base';
import { store } from '../../store/store';
import { setBrands, setModels } from '../../store/slices/FilterSlice';

export default function CheckBoxList({ options , type}) {
  const [checkedItems, setCheckedItems] = useState({}); // initial state for checked items

  // handle checkbox toggle
  const handleCheckboxToggle = (option) => {
    setCheckedItems({ ...checkedItems, [option]: !checkedItems[option] });
  };

  useEffect(() => {
    if (type === "brand") {
        store.dispatch(setBrands(checkedItems));
    }
    else if (type === "model") {
        store.dispatch(setModels(checkedItems));
    }

  }, [checkedItems]);


  return (
  <View style={{ height:100, margin:10}}>
    <ScrollView>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => handleCheckboxToggle(option)}
          style={{ flexDirection: 'row', alignItems: 'center'}}
        >
          <Ionicons
            name={checkedItems[option] ? 'checkbox-outline' : 'square-outline'}
            size={24}
            color={"#2A59FE"}
            style={{ marginRight: 10 }}
          />
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
}