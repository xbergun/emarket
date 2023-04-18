import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { HStack } from 'native-base'
import CustomIcon from '../icon/CustomIcon'
import { useNavigation } from '@react-navigation/native'

const Header = ({
    isBack = false,
}) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (

        isBack && (
            <HStack>
                <TouchableOpacity onPress={handleGoBack}>
                    <CustomIcon iconName="arrow-left" size='25' color={"white"} />
                </TouchableOpacity>
            </HStack>
        )


    )
}

export default Header

const styles = StyleSheet.create({})