import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Boton from "./boton";

const ItemUser = (props) => {
      return (
            <View style={[styles.content_item]}>
                  <Text style={styles.content_id}>{props.id}</Text>
                  <View style={styles.content_text}>
                        <Text style={styles.nombre}>
                              {props.nombre} {props.apellido}
                        </Text>
                        <Text style={styles.ci}>{props.ci}</Text>
                  </View>
                  <Boton title="M" onPress={props.modificar} />
                  <Boton title="x" onPress={props.eliminar} />
            </View>
      );
};

export default ItemUser;

const styles = StyleSheet.create({
      content_item: {
            backgroundColor: "#Dee9fd",
            margin: 4,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 50,
            overflow: "hidden",
            borderWidth: 1,
      },
      content_id: {
            flex: 1,
            backgroundColor: "#A1D1F5",
            textAlign: "center",
            textAlignVertical: "center",
            height: "100%",
            paddingHorizontal: 10,
            fontWeight: "bold",
      },
      content_text: {
            flex: 7,
            padding: 10,
      },
      nombre: {
            fontSize: 16,
            fontWeight: "bold",
      },
      ci: {
            fontStyle: "italic",
      },
});
