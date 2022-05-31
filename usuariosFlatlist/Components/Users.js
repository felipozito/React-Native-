import { FlatList, Text } from "react-native";
import ItemUser from "../Components/itemUser";
import React, { useContext } from "react";
import { UserContext } from "../Context/userContext";
const Users = () => {
      const { usuario, setusuario, setnombre, setapellido, setcedula, setnuevo } = useContext(UserContext);

      return (
            <FlatList
                  data={usuario}
                  keyExtractor={(item) => item.ci}
                  renderItem={(item) => (
                        <ItemUser
                              id={item.index}
                              nombre={item.item.nombre}
                              apellido={item.item.apellido}
                              ci={item.item.ci}
                              eliminar={() => {
                                    setusuario(usuario.filter((user) => user.ci !== item.item.ci));
                              }}
                              modificar={() => {
                                    setnombre(item.item.nombre);
                                    setapellido(item.item.apellido);
                                    setcedula(item.item.ci);
                                    setnuevo(false);
                              }}
                        />
                  )}
            ></FlatList>
      );
};

export default Users;
