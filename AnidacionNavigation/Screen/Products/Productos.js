import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Productos = () => {
      return (
            <View style={styles.container}>
                  <Text>Productos</Text>
            </View>
      );
};
export default Productos;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
});
