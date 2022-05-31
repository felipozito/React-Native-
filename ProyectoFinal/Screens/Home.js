import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Boton from "../Components/Boton";

const Home = ({ navigation }) => {
      return (
            <View style={styles.container1}>
                  <View style={styles.container2}>
                        <Boton
                              title={"Ingresar Persona"}
                              onPress={() => {
                                    navigation.navigate("IngresarPersonas");
                              }}
                        />
                        <Boton
                              title={"Lista de  Persona"}
                              onPress={() => {
                                    navigation.navigate("ListaPersonas");
                              }}
                        />
                  </View>
                  <View style={styles.container2}>
                        <Boton
                              title={"Ingresar Nota"}
                              onPress={() => {
                                    navigation.navigate("IngresarNotas");
                              }}
                        />
                        <Boton
                              title={"Mostrar Notas"}
                              onPress={() => {
                                    navigation.navigate("ListaNotas");
                              }}
                        />
                  </View>
            </View>
      );
};

export default Home;
const styles = StyleSheet.create({
      container1: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
      container2: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 2,
            height: 50,
      },
});
