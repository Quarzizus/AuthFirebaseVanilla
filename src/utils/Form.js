import firebase from "firebase";
import "firebase/auth";

const Form = () => {
  const formData = {
    email: null,
    password: null,
  };

  // handleChange
  [...document.querySelectorAll(".input")].map((input) => {
    input.addEventListener("input", (e) => {
      formData[e.target.name] = e.target.value;
    });
  });
  // Registrar
  document.querySelector(".registrar").addEventListener("click", async (e) => {
    e.preventDefault();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password);
  });
  // Login
  document.querySelector(".login").addEventListener("click", async (e) => {
    e.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password);
  });
  // Login with google
  document.querySelector(".google").addEventListener("click", (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
};

export default Form;
