import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Dropdown = () => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <TouchableOpacity style={styles.dropdownOption}>
          <Text>Seçenek 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownOption}>
          <Text>Seçenek 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropdownOption}>
          <Text>Seçenek 3</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
    dropdownOption: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    dropdownOptionText: {
      fontSize: 16,
      color: '#333',
    },
  });
  
