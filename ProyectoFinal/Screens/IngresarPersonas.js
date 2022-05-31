import { View, StyleSheet, TextInput, Text } from "react-native";
import React, { useState } from "react";
import Boton from "../Components/Boton";
import { saveUser, getUser, getNames } from "../Services/UserServices";

const IngresarPersonas = ({ navigation, route }) => {
      let userSelect = null;
      let refreshFN = null;
      if (route != null && route.params != null && route.params.userSelect != null) {
            userSelect = route.params.userSelect;
      } else {
            userSelect = { nombre: null, apellido: null, cedula: null };
      }
      refreshFN = route.params.refreshFN;

      const [nombre, setNombre] = useState(userSelect.nombre);
      const [apellido, setApellido] = useState(userSelect.apellido);
      const [cedula, setCedula] = useState(userSelect.cedula);

      return (
            <View style={styles.container}>
                  <View style={styles.container2}>
                        <TextInput placeholder="Ingrese Cedula" onChangeText={setNombre} value={nombre} style={styles.input}></TextInput>
                        <TextInput placeholder="Ingrese Apellido" value={apellido} onChangeText={setApellido} style={styles.input}></TextInput>
                        <TextInput placeholder="Ingrese Cedula" value={cedula} onChangeText={setCedula} style={styles.input}></TextInput>
                  </View>
                  <View style={styles.container2}>
                        <Boton
                              title="+"
                              onPress={() => {
                                    const user = {
                                          nombre: nombre,
                                          apellido: apellido,
                                          cedula: cedula,
                                    };
                                    saveUser(user);
                                    getUser(refreshFN);
                                    navigation.goBack();
                              }}
                        />
                  </View>
            </View>
      );
};

export default IngresarPersonas;
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
      container2: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
      },
      input: {
            margin: 2,
            width: "100%",
            height: 50,
            fontSize: 25,
            borderBottomWidth: 2,
            borderBottomColor: "black",
      },
});
