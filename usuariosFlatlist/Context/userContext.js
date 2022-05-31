import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserContextProvaider(props) {
      const [nombre, setnombre] = useState();
      const [apellido, setapellido] = useState();
      const [cedula, setcedula] = useState();
      const [usuario, setusuario] = useState([
            {
                  nombre: "Felipe",
                  apellido: "Asimbaya",
                  ci: "1719903328",
            },
            {
                  nombre: "Julio",
                  apellido: "Baca",
                  ci: "1719903325",
            },
      ]);
      const [nuevo, setnuevo] = useState(true);
      return (
            <UserContext.Provider value={{ nombre, setnombre, apellido, setapellido, cedula, setcedula, usuario, setusuario, nuevo, setnuevo }}>
                  {props.children}
            </UserContext.Provider>
      );
}
