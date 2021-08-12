const HeroView = (name, avatar) => {
  const view = `
    <h2>Hola, como estás ${name}</h2>
    <img src="${avatar}"/>
    <button class="logout">Logout</button>
    `;
  return view;
};

export default HeroView;
