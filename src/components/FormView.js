import "../styles/components/Form.scss";

const FormView = () => {
  const view = `
    <form class="Form">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" class="input" />
      <label for="password">Password</label>
      <input type="password" name="password" id="password" class="input" />
      <button class="registrar">Registrar</button>
      <button class="login">Login</button>
      <button class="google">Google</button>
    </form>
  `;
  return view;
};

export default FormView;
