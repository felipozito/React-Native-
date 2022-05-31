import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NewContacts = () => {
      return (
            <View style={styles.container}>
                  <Text>NewContact</Text>
            </View>
      );
};

export default NewContacts;
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
});
