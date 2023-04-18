import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#888',
      marginTop: 5,
    },
  });
