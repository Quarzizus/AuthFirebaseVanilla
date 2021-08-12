import firebase from "firebase";
import "firebase/auth";

const Hero = () => {
  document.querySelector(".logout").addEventListener("click", async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => console.log("Sign out"));
  });
};

export default Hero;
