/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let count = 0; // Variável para armazenar a contagem de navios de guerra
  
  // Percorre cada célula da matriz
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // Verifica se a célula atual contém um navio de guerra ('X')
      if (board[i][j] === 'X') {
        // Verifica se a célula anterior na mesma linha também contém um navio de guerra
        if (i > 0 && board[i - 1][j] === 'X') {
          continue; // Se sim, é uma parte do mesmo navio, então continua para a próxima iteração
        }
        // Verifica se a célula anterior na mesma coluna também contém um navio de guerra
        if (j > 0 && board[i][j - 1] === 'X') {
          continue; // Se sim, é uma parte do mesmo navio, então continua para a próxima iteração
        }
        count++; // Se não, é um novo navio de guerra, então incrementa a contagem
      }
    }
  }
  
  return count; // Retorna o número total de navios de guerra encontrados
};