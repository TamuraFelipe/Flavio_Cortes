const redirecionaWpp = () => {
  const numero = "5518997335065"; // Substitua pelo número desejado
  const mensagem = "Olá, gostaria de agendar um horário."; // Substitua pela mensagem desejada

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
};

export default redirecionaWpp;
