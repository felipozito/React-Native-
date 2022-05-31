import { FlatList, Text } from "react-native";
import ItemProductos from "./itemProductos";
import React, { useContext } from "react";
import { ProductosContext } from "../Context/ProductContent";
const Productos = () => {
      const { productos } = useContext(ProductosContext);
      return <FlatList data={productos} keyExtractor={(item) => item.codigo} renderItem={(item) => <ItemProductos object={item.item} />}></FlatList>;
};

export default Productos;
