const verificaHorario = () => {
  const dataAtual = new Date();
  const diaSemana = dataAtual.getDay(); // 0 (Domingo) a 6 (Sábado)
  const horaAtual = dataAtual.getHours();

  // Verifica se é domingo (0) ou sábado (6)
  if (diaSemana === 0) {
    return false; // Fechado
  } else {
    // Verifica se está dentro do horário de atendimento (8h às 19h)
    if (horaAtual >= 8 && horaAtual < 19) {
      return true; // Aberto
    } else {
      return false; // Fechado
    }
  }
};

export default verificaHorario;
