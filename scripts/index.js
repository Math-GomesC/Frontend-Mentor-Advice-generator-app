let Botao = document.getElementById('BotaoMudarDica');

Botao.addEventListener('click', async () => {
  try {
    let NumeroDica = document.getElementById('NumeroDica');
    let ParagrafoDica = document.getElementById('DicaParagrafo');
    const ApiDica = await fetch('https://api.adviceslip.com/advice');
    if (!ApiDica.ok) {
      throw new Error('Erro na requisição:' + ApiDica.status);
    }
    let Dica = await ApiDica.json();
    const { slip } = Dica;
    const { id, advice } = slip;
    NumeroDica.textContent = `ADVICE #${id}`
    ParagrafoDica.textContent = advice
  } catch (Erro) {
    console.log(Erro);
  }
});
