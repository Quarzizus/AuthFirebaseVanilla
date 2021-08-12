import Form from "./utils/Form.js";
import fc from "./firebaseConfig.js";
import FormView from "./components/FormView.js";
import HeroView from "./components/HeroView.js";
import Hero from "./utils/Hero.js";
import firebase from "firebase";
import "firebase/auth";
import "./styles/containers/index.scss";

(function app() {
  const app = null || document.querySelector("#App");
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      app.innerHTML = FormView();
      Form();
    } else {
      app.innerHTML = HeroView(user.displayName, user.photoURL);
      Hero();
    }
  });
})();
