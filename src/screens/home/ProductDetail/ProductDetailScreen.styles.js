import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'space-between',
      },
      image: {
        width: '100%',
        height: 200,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
      },
      description: {
        fontSize: 16,
        marginTop: 10,
      },
      priceContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flex: 1,
      },
      priceTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#2A59FE',
      },
      priceValue: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
      },
      button: {
        backgroundColor: '#2A59FE',
        padding: 10,
        borderRadius: 5,
        width: 180,
      },
      buttonTitle: {
        color: 'white',
        fontWeight: 'bold',
      },
    
});