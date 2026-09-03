import { CalendarDaysIcon } from "lucide-react";
import redirecionaWpp from "../../../utils/redirecionaWpp";

const ButtonAgendarSpecial = () => {
  return (
    <button
      onClick={redirecionaWpp}
      className="
    group
    inline-flex
    items-center
    gap-3
    rounded-lg
    border border-[#9b6f2f]
    bg-[#11100e]
    px-6 py-3
    text-left
    transition-all duration-300
    hover:border-[#c99a4a]
    hover:bg-[#181510]
    hover:shadow-[0_0_20px_rgba(201,154,74,0.15)]
  "
    >
      <CalendarDaysIcon
        className="
      h-8 w-8
      text-[#c99a4a]
      transition-transform duration-300
      group-hover:scale-110
    "
      />

      <div>
        <span className="block text-sm font-medium tracking-widest text-[#c99a4a]">
          AGENDAR HORÁRIO
        </span>

        <span className="block text-xs text-white/50">
          Seu estilo, nosso compromisso
        </span>
      </div>
    </button>
  );
};

export default ButtonAgendarSpecial;
