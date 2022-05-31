import { TouchableOpacity, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { deleteUser, getUser } from "../Services/UserServices";
import Boton from "../Components/Boton";

const UserAdd = ({ user, refreshFN }) => {
      const navigation = useNavigation();
      return (
            <TouchableOpacity
                  onPress={() => {
                        navigation.navigate("IngresarPersonas", { userSelect: user, refreshFN: refreshFN });
                  }}
                  style={styles.container}
            >
                  <Text>{user.nombre}</Text>
                  <Text>{user.apellido}</Text>
                  <Text>{user.cedula}</Text>
                  <Boton
                        title={"x"}
                        onPress={() => {
                              deleteUser(user);
                              getUser(refreshFN);
                        }}
                  />
            </TouchableOpacity>
      );
};

export default UserAdd;
const styles = StyleSheet.create({
      container: {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
            borderRadius: 20,
            borderWidth: 1,
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
