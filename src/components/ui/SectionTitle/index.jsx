const SectionTitle = ({ title }) => {
  return (
    <div className="w-full mb-8">
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
        <span
          className="
            shrink-0
            text-base
            font-bold
            uppercase
            tracking-[0.45em]
            text-[#b89b5e]
          "
        >
          {title}
        </span>

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
