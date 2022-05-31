import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Contacts = ({ navigation }) => {
      return (
            <View style={styles.container}>
                  <Text>Contacts</Text>
                  <Button
                        title={"Agregar"}
                        onPress={() => {
                              navigation.navigate("NuevoContacto");
                        }}
                  ></Button>
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
});
