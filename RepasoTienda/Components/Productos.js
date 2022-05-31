import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { ProductosContext } from "../Context/ProductosContext";
import ItemProductos from "./ItemProductos";

const Productos = () => {
      const { productos } = useContext(ProductosContext);
      return (
            <View>
                  <FlatList
                        data={productos}
                        keyExtractor={(item) => item.codigo}
                        renderItem={(item) => <ItemProductos data={item.item} />}
                  ></FlatList>
            </View>
      );
};

export default Productos;
