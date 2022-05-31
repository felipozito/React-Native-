import { doc, setDoc, collection, query, getDocs, where, deleteDoc } from "firebase/firestore";

export const saveUser = (user) => {
      setDoc(doc(global.db, "/Personas", user.cedula), user);
};
export const getUser = async (funcion) => {
      const q = query(collection(global.db, "/Personas"));
      const querySnapshot = await getDocs(q);
      let userTemp = [];
      querySnapshot.forEach((doc) => {
            userTemp.push(doc.data());
      });
      funcion(userTemp);
};
export const deleteUser = async (user) => {
      await deleteDoc(doc(global.db, "/Personas", user.cedula));
};
//////////////////////////////////////////////////////////////////
export const getNames = async (funcion, cedula) => {
      const q = query(collection(global.db, "/Personas"), where("cedula", "==", cedula));
      const querySnapshot = await getDocs(q);
      let userTemp = [];
      querySnapshot.forEach((doc) => {
            userTemp.push(doc.data());
      });
      console.log(userTemp);
      funcion(userTemp);
};
export const saveNote = (cedula, note) => {
      setDoc(doc(global.db, `Personas/${cedula}/Calificaciones`, note.materia), note);
};
export const getNote = async (funcion, cedula) => {
      const q = query(collection(global.db, `/Personas/${cedula}/Calificaciones`));
      const querySnapshot = await getDocs(q);
      let userTemp = [];
      querySnapshot.forEach((doc) => {
            userTemp.push(doc.data());
      });
      funcion(userTemp);
};

export const deleteNote = async (note) => {
      await deleteDoc(doc(global.db, "/Personas", note.materia));
};
