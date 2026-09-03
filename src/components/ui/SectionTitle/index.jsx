const SectionTitle = ({ title }) => {
  return (
    <div className="w-full py-12">
      {/* Título com linhas laterais */}
      <div className="flex items-center gap-6">
        {/* Linha esquerda */}
        <div
          className="
            h-px flex-1
            bg-linear-to-r
            from-transparent
            via-[#b89b5e]
            to-[#b89b5e]
          "
        />

        {/* Título */}
        <h2
          className="
            shrink-0
            text-sm
            lg:text-base
            font-bold
            uppercase
            tracking-widest
            text-[#b89b5e]
          "
        >
          {title}
        </h2>

        {/* Linha direita */}
        <div
          className="
            h-px flex-1
            bg-linear-to-l
            from-transparent
            via-[#b89b5e]
            to-[#b89b5e]
          "
        />
      </div>
    </div>
  );
};

export default SectionTitle;
