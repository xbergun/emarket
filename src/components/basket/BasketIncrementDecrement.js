import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcon from '../icon/CustomIcon';

const BasketIncrementDecrement = ({
    increment,
    incrementOnPress,
    decrementOnPress
}) => {
  return (
    <TouchableOpacity
        onPress={increment ? incrementOnPress : decrementOnPress}
        style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <CustomIcon iconName={increment ? "plus" : "minus"} size={12} />
    </TouchableOpacity>
  )
}

export default BasketIncrementDecrement

const styles = StyleSheet.create({})