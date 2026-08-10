const MenuDesktop = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Galeria", href: "/galeria" },
    { name: "Contato", href: "/contato" },
  ];
  return (
    <ul className="flex gap-10 items-center">
      {menuItems.map((item) => (
        <li key={item.href} className="border-b-2 border-brand pb-1">
          <a className="pb-2" href={item.href}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuDesktop;
