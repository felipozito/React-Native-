import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./Contacts/Contacts";
import NewContact from "./Contacts/NewContacts";

const ContactsNav = () => {
      const StackContact = createStackNavigator();
      return (
            <StackContact.Navigator>
                  <StackContact.Screen name="ListaContactos" component={Contacts} />
                  <StackContact.Screen name="NuevoContacto" component={NewContact} />
            </StackContact.Navigator>
      );
};

export default ContactsNav;
