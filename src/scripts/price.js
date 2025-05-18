const cards = document.querySelectorAll('.card-price');
const botoes = document.querySelectorAll('.button-price');

botoes.forEach((botao, index) => {
  botao.addEventListener('mouseenter', () => {
    cards[index].style.backgroundImage = 'linear-gradient(#1f222a, #87402a)';
  });

  botao.addEventListener('mouseleave', () => {
    cards[index].style.backgroundImage = 'none'; // ou uma cor padrão
    cards[index].style.backgroundColor = '#1f222a'; // por exemplo
  });
});
