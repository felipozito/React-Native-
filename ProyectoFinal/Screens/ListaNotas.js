import { View, TextInput, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import UserAdd from "../Components/UserAdd";
import Boton from "../Components/Boton";
import { getUser, getNote } from "../Services/UserServices";

const ListaNotas = ({ navigation }) => {
      const [notas, setNotas] = useState([]);
      const [cedula, setCedula] = useState("");
      const [promedio, setPromedio] = useState();

      useEffect(() => {
            getNote(refreshScreen, cedula);
      }, []);

      const refreshScreen = (array) => {
            setNotas(array);
      };
      // setUser(getUser());

      const prom = () => {
            let ans;
            notas.forEach((item) => {
                  ans = eval(ans + item.nota);
            });
            console.log(ans);

            setPromedio(parseInt(ans) / notas.length);
      };

      return (
            <View style={styles.container}>
                  <View style={styles.container2}>
                        <TextInput placeholder="Ingrese Cedula" value={cedula} onChangeText={setCedula} style={styles.input}></TextInput>
                        <Boton
                              title={"Buscar"}
                              onPress={() => {
                                    getNote(refreshScreen, cedula);
                              }}
                        />
                  </View>
                  <FlatList
                        data={notas}
                        renderItem={({ item }) => {
                              return (
                                    <View style={styles.container2} refreshFN={refreshScreen}>
                                          <Text>{item.nombreMateria}</Text>
                                          <Text>{item.nota}</Text>
                                    </View>
                              );
                        }}
                  ></FlatList>
                  <Text>El promedio es:{promedio}</Text>
            </View>
      );
};

export default ListaNotas;
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
      },
      container2: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
      },
});
