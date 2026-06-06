const ElementoNav = ({ children, link = "#", select }) => {
  return (
    <a href={link} className={select == true ? "navact" : ""}>
      {children}
    </a>
  );
};

export const Nav = ({ activo = "0" }) => {
  // Podemos elegir con ^ cual casilla va a estar activa
  // Si no le asignamos un valor, ninguna casilla se activara
  return (
    <nav>
      <ElementoNav select={activo == "1" ? true : false}>Inicio</ElementoNav>
      <ElementoNav select={activo == "2" ? true : false}>Proyectos</ElementoNav>
      <ElementoNav select={activo == "3" ? true : false}>Mi Perfil</ElementoNav>
    </nav>
  );
};
