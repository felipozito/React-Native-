import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Contacts = ({ navigation }) => {
      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Estoy en Contactos</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.btn}>
                        <Text style={styles.text}>Ir a Home</Text>
                  </TouchableOpacity>
            </View>
      );
};

export default Contacts;

const styles = StyleSheet.create({
      container: {
            flex: 1,
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
