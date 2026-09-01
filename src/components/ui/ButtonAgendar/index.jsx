import { CalendarIcon } from "lucide-react";
const ButtonAgendar = ({ variant }) => {
  const stylesDefault =
    "uppercase bg-brand text-white flex items-center gap-2 px-3 py-2 rounded-md text-sm lg:text-base hover:bg-[#b89b5e] transition-colors duration-300";
  const buttonVariants = {
    default: stylesDefault,
    hero: stylesDefault + " w-full justify-center md:w-auto",
    secondary: `${stylesDefault} bg-white text-brand border border-brand`,
    header: `${stylesDefault} text-xs`,
    menu: `${stylesDefault} text-xs w-full justify-center`,
  };
  return (
    <button className={buttonVariants[variant] || buttonVariants.default}>
      <CalendarIcon size={16} />
      Agendar horário
    </button>
  );
};

export default ButtonAgendar;
