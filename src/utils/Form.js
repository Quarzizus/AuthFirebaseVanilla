import firebase from "firebase";
import "firebase/auth";

const Form = () => {
  const formData = {
    email: null,
    password: null,
    name: null,
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

    const config = {
      url: "http://localhost:8080/",
    };
    const user = firebase.auth().currentUser;

    await user.updateProfile({
      displayName: formData.name,
    });

    await user.sendEmailVerification(config);
    await firebase.auth().signOut();
  });
  // Login
  document.querySelector(".login").addEventListener("click", async (e) => {
    e.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password);
  });
  // Login with Google
  document.querySelector(".google").addEventListener("click", (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      });
  });
  // Login with Github
  document.querySelector(".github").addEventListener("click", (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      });
  });
};

export default Form;
