import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../Context/userContext";
import Boton from "./boton";

const addUser = (props) => {
      const { setnombre, setapellido, setcedula, nombre, apellido, cedula, usuario, setusuario, setnuevo, nuevo } = useContext(UserContext);
      const agregar = () => {
            if (nuevo) {
                  const user = {
                        nombre: nombre,
                        apellido: apellido,
                        ci: cedula,
                  };
                  setusuario([...usuario, user]);
                  limpiar();
            } else {
                  const usermod = usuario.map((item) => {
                        if (item.ci === cedula) {
                              item.nombre = nombre;
                              item.apellido = apellido;
                              return item;
                        } else {
                              return item;
                        }
                  });
                  setusuario(usermod);
            }
      };

      const limpiar = () => {
            setnombre(null);
            setapellido(null);
            setcedula(null);
            setnuevo(true);
      };
      return (
            <View>
                  <Text style={{ fontSize: 20, textAlign: "center" }}>Personas</Text>
                  <View style={styles.content_input}>
                        <TextInput style={styles.input} placeholder="Ingrese Nombre" onChangeText={setnombre} value={nombre}></TextInput>
                        <TextInput style={styles.input} placeholder="Ingrese Apellido" onChangeText={setapellido} value={apellido}></TextInput>
                        <TextInput style={styles.input} placeholder="Ingrese CI" onChangeText={setcedula} value={cedula} editable={nuevo}></TextInput>
                  </View>
                  <View style={styles.content_btn}>
                        <Boton title={nuevo ? "Agregar" : "Modificar"} onPress={agregar} />
                        <Boton title={"Nuevo"} onPress={limpiar} />
                  </View>
            </View>
      );
};

export default addUser;

const styles = StyleSheet.create({
      content_btn: {
            flexDirection: "row",
            justifyContent: "space-evenly",
      },
      input: {
            borderWidth: 2,
            borderRadius: 10,
            margin: 1,
            paddingHorizontal: 10,
            marginVertical: 4,
      },
});
