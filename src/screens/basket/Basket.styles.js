import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    priceContainer :{
        justifyContent: 'space-between',
        padding: 20,
    },
    totalPrice: {
        fontSize: 20,
        color: '#2A59FE',
    },
    totalPriceValue: {
        fontSize: 20,
    },
    button: {
        backgroundColor: '#2A59FE',
        borderRadius: 10,
        padding: 10,
        width: "90%",
    },
    buttonTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    empty : {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
    }
});
