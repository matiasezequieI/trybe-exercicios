let peca = 'rainha';
peca = peca.toLocaleLowerCase();

switch (peca) {
  case 'peao':
    console.log(
      'os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido.O peão é também a única peça que não captura da mesma maneira que se move. Os peões capturam a peça adversária movendo-se diagonalmente uma casa - ele não pode capturar movendo-se para frente.'
    );
    break;
  case 'bispo':
    console.log(
      'bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça'
    );
    break;
  case 'torre':
    console.log(
      'A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça'
    );
    break;
  case 'cavalo':
    console.log(
      'O cavalo é a peça mais especial no xadrez, possuindo uma flexibilidade que o torna poderoso. O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L"'
    );
    break;
  case 'rainha':
    console.log(
      'A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados. A menos que esteja realizando uma captura, o movimento deve terminar em uma casa desocupada e ela não pode pular outras peças. A rainha captura no mesmo caminho em que se move, ocupando a casa da peça adversária.'
    );
    break;
  case 'rei':
    console.log(
      'O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente'
    );
    break;
  default:
    console.log('peça invalida!');
}
