import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNav from "./HomeNav";
import Informacion from "./Informacion";

const RootNav = () => {
      const DrawerRoot = createDrawerNavigator();
      return (
            <DrawerRoot.Navigator>
                  <DrawerRoot.Screen name="Home" component={HomeNav} />
                  <DrawerRoot.Screen name="Info" component={Informacion} />
            </DrawerRoot.Navigator>
      );
};

export default RootNav;
