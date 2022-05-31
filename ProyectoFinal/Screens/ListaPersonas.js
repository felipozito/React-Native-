import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import UserAdd from "../Components/UserAdd";
import { getUser } from "../Services/UserServices";
import Boton from "../Components/Boton";

const ListaPersonas = ({ navigation }) => {
      const [user, setUser] = useState([]);

      useEffect(() => {
            getUser(refreshScreen);
      }, []);

      const refreshScreen = (array) => {
            setUser(array);
      };
      // setUser(getUser());
      return (
            <View style={styles.container}>
                  <FlatList
                        data={user}
                        renderItem={({ item }) => {
                              return <UserAdd user={item} refreshFN={refreshScreen} />;
                        }}
                  ></FlatList>
                  <Boton
                        title={"+"}
                        onPress={() => {
                              navigation.navigate("IngresarPersonas", { refreshFN: refreshScreen });
                        }}
                  />
            </View>
      );
};

export default ListaPersonas;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
      },
});
