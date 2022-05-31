import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { initializeApp } from "firebase/app";
import { getFirestore, setDoc } from "firebase/firestore";
import { collection, addDoc, doc } from "firebase/firestore";

const firebaseConfig = {
      apiKey: "AIzaSyC4NCJjQJOotaEIA3X_IWF9V7EQ59bl_u0",
      authDomain: "bdate-a25cb.firebaseapp.com",
      projectId: "bdate-a25cb",
      storageBucket: "bdate-a25cb.appspot.com",
      messagingSenderId: "372589623708",
      appId: "1:372589623708:web:50b968c688e0c927faf059",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const addContact = async () => {
      try {
            const docRef = await setDoc(doc(db, "contacts", "4"), {
                  nombre: "Ada",
                  apellido: "aa",
                  telefono: "1815",
            });
      } catch (e) {
            console.error("Error adding document: ", e);
      }
};

export default function App() {
      return (
            <View style={styles.container}>
                  <Text>Open up App.js to start working on your app!</Text>
                  <Button title="Agregar" onPress={addContact}></Button>
                  <StatusBar style="auto" />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
});
