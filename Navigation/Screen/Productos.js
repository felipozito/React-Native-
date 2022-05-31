import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Productos = ({ navigation }) => {
      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Estoy en Productos</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btn}>
                        <Text style={styles.text}>Ir a Home</Text>
                  </TouchableOpacity>
            </View>
      );
};

export default Productos;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "flex-start",
      },
      btn: {
            backgroundColor: "blue",
            marginHorizontal: 10,
            fontWeight: "bold",
            fontSize: 20,
            padding: 20,
            borderRadius: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
      },
      text: {
            color: "white",
      },
      title: {
            fontSize: 20,
      },
});
