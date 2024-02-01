import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      //chekea si en el 0 hay X o O, luego sin el 0 y 2 hay X o O y así
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //si no hay ganador
  return null;
};

const checkEndGame = (newBoard) => {
  //revisamos si no hay espacios vacios en el tablero
  return newBoard.every((square) => square != null);
};
