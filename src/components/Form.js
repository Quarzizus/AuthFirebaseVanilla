import fc from "../firebaseConfig.js";
import "firebase/auth";

const Form = () => {
  const view = `
      <h1>Holiwi</h1>
      <form>
        <label for="email">Name</label>
        <input type="email" name="email" id="email" class="input" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="input" />
        <button class="button">Registrar</button>
      </form>
  `;
  const methods = () => {
    const formData = {
      email: null,
      password: null,
    };
    [...document.querySelectorAll(".input")].map((input) => {
      input.addEventListener("input", (e) => {
        formData[e.target.name] = e.target.value;
        console.log(formData);
      });
    });
    document.querySelector(".button").addEventListener("click", async (e) => {
      e.preventDefault();
      await fc
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password);
      console.log(formData);
    });
  };

  return [view, methods];
};

export default Form;
