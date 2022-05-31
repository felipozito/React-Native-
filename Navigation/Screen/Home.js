import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
      return (
            <View style={styles.container}>
                  <TouchableOpacity onPress={() => navigation.navigate("Contactos")} style={styles.btn}>
                        <Text style={styles.text}>Contactos</Text>
                  </TouchableOpacity>
                  <Text style={styles.title}>Home</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("Productos")} style={styles.btn}>
                        <Text style={styles.text}>Productos</Text>
                  </TouchableOpacity>
            </View>
      );
};

export default Home;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
      btn: {
            backgroundColor: "blue",
            marginHorizontal: 10,
            fontWeight: "bold",
            fontSize: 20,
            padding: 20,
            borderRadius: 20,
      },
      text: {
            color: "white",
      },
      title: {
            fontSize: 20,
      },
});
