const HeroView = (email) => {
  const view = `
    <h2>Hola, como estás ${email}</h2>
    <button class="logout">Logout</button>
  `;
  return view;
};

export default HeroView;
