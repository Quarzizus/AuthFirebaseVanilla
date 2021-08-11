// import fc from "./firebaseConfig.js";
import Form from "./components/Form.js";

const [view, methods] = Form();

(function app() {
  const app = null || document.querySelector("#App");
  app.innerHTML = view;
  methods();
})();
