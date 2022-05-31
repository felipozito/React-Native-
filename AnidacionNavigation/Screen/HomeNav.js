import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Productos from "./Products/Productos";
import ContactsNav from "./ContactsNav";

const HomeNav = () => {
      const TabHome = createBottomTabNavigator();
      return (
            <TabHome.Navigator>
                  <TabHome.Screen name="ListaProductos" component={Productos} />
                  <TabHome.Screen name="Contactos" component={ContactsNav} />
            </TabHome.Navigator>
      );
};

export default HomeNav;
