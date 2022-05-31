import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import Boton from "./Boton";
import { ProductosContext } from "../Context/ProductosContext";

const ItemProductos = (props) => {
      const { productos, setProductos, setNombre, setCategoria, setPrecioVenta, setNuevo, setPrecioCompra, setCodigo } = useContext(ProductosContext);
      const [modalVisible, setModalVisible] = useState(false);

      return (
            <View>
                  <TouchableOpacity
                        style={[styles.content_item]}
                        onPress={() => {
                              setCodigo(props.data.codigo);
                              setNombre(props.data.nombre);
                              setCategoria(props.data.categoria);
                              setPrecioCompra(props.data.precioCompra);
                              setPrecioVenta(props.data.precioVenta);
                              setNuevo(false);
                        }}
                  >
                        <Text style={styles.content_id}>{props.data.codigo}</Text>
                        <View style={styles.content_text}>
                              <Text style={styles.nombre}>{props.data.nombre}</Text>
                              <Text style={styles.ci}>{props.data.categoria}</Text>
                        </View>
                        <Text style={styles.cantidad}>{props.data.precioVenta}</Text>
                        <Boton title="X" type={"3"} onPress={() => setModalVisible(true)} />
                  </TouchableOpacity>
                  <Modal animationType="fade" transparent={true} visible={modalVisible}>
                        <View style={styles.centeredView}>
                              <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Seguro Desea Eliminar?</Text>
                                    <Pressable
                                          style={[styles.button, styles.buttonOpen]}
                                          onPress={() => {
                                                console.log(props.data.codigo);
                                                setProductos(
                                                      productos.filter((product) => {
                                                            return product.codigo != props.data.codigo;
                                                      })
                                                );
                                                setModalVisible(!modalVisible);
                                          }}
                                    >
                                          <Text style={styles.textStyle}>Aceptar</Text>
                                    </Pressable>
                                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                                          <Text style={styles.textStyle}>Cancelar</Text>
                                    </Pressable>
                              </View>
                        </View>
                  </Modal>
            </View>
      );
};

export default ItemProductos;

const styles = StyleSheet.create({
      content_item: {
            backgroundColor: "#Dee9fd",
            margin: 4,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 50,
            overflow: "hidden",
            borderWidth: 1,
            height: 60,
      },
      content_id: {
            flex: 1,
            backgroundColor: "#A1D1F5",
            textAlign: "center",
            textAlignVertical: "center",
            height: "100%",
            paddingHorizontal: 10,
            paddingTop: 10,
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
      cantidad: {
            fontSize: 20,
            fontWeight: "bold",
            paddingHorizontal: 10,
            fontStyle: "italic",
      },
      modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
      },
      button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
      },
      buttonOpen: {
            backgroundColor: "#F194FF",
      },
      buttonClose: {
            backgroundColor: "#2196F3",
      },
      textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
      },
      modalText: {
            marginBottom: 15,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
      },
      centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
      },
});
