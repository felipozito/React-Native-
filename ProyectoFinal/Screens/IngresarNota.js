import { View, StyleSheet, TextInput, Text } from "react-native";
import React, { useContext, useState } from "react";
import { saveNote, getNames } from "../Services/UserServices";
import Boton from "../Components/Boton";
import DropDownPicker from "react-native-dropdown-picker";

const IngresarNota = ({ route, navigation }) => {
      const [nombre, setNombre] = useState("");
      const [apellido, setApellido] = useState("");
      const [cedula, setCedula] = useState();
      const [nota, setNota] = useState(false);
      const [materia, setMateria] = useState("");

      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(["MAT", "ING", "SOC", "MUS"]);
      const [items, setItems] = useState([
            { label: "Matematicas", value: "MAT" },
            { label: "Ingles", value: "ING" },
            { label: "Sociales", value: "SOC" },
            { label: "Musica", value: "MUS" },
      ]);

      const refreshScreen = (array) => {
            setNombre(array[0].nombre);
            setApellido(array[0].apellido);
      };

      return (
            <View style={styles.container}>
                  <View style={styles.container2}>
                        <TextInput placeholder="Ingrese Cedula" value={cedula} onChangeText={setCedula} style={styles.input}></TextInput>
                        <Boton
                              title={"Buscar"}
                              onPress={() => {
                                    getNames(refreshScreen, cedula);
                              }}
                        />
                  </View>
                  <View style={styles.container2}>
                        <View>
                              <Text>{nombre + " " + apellido}</Text>
                              <TextInput placeholder="Ingrese Nota" value={nota} onChangeText={setNota} style={styles.input}></TextInput>
                              <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    theme="DARK"
                                    multiple={true}
                                    mode="BADGE"
                                    // badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
                              />

                              <Boton
                                    title={"Agregar"}
                                    onPress={() => {
                                          const Newnota = {
                                                nombreMateria: value[0],
                                                materia: value[0],
                                                nota: nota,
                                          };
                                          console.log(Newnota);
                                          saveNote(cedula, Newnota);
                                    }}
                              />
                        </View>
                  </View>
            </View>
      );
};

export default IngresarNota;

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
