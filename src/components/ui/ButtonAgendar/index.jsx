import { CalendarIcon } from "lucide-react";
const ButtonAgendar = ({ variant }) => {
  const stylesDefault =
    "uppercase bg-brand text-white flex items-center gap-2 px-3 py-2 rounded-md";
  const buttonVariants = {
    default: stylesDefault,

    secondary: `${stylesDefault} bg-white text-brand border border-brand`,

    header: `${stylesDefault} text-xs`,
    menu: `${stylesDefault} text-xs w-full justify-center`,
  };
  return (
    <button className={buttonVariants[variant] || buttonVariants.default}>
      <CalendarIcon />
      Agendar horário
    </button>
  );
};

export default ButtonAgendar;
