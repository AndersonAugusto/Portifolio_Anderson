import React, { useState } from "react";
import "./tictactoe.scss";

const initialBoard = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      if (
        newBoard[combination[0]] &&
        newBoard[combination[0]] === newBoard[combination[1]] &&
        newBoard[combination[1]] === newBoard[combination[2]]
      ) {
        setWinner(newBoard[combination[0]]);
        return;
      }
    }
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const renderResetButton = () => {
    return (
      <button
        className="reset-button"
        onClick={() => {
          setBoard(initialBoard);
          setIsXNext(true);
          setWinner(null);
        }}
      >
        Reset
      </button>
    );
  };

  const renderStatus = () => {
    if (winner) {
      renderResetButton();
      return `Vencedor: ${winner}`;
    } else if (!winner && !board.includes("")) {
      renderResetButton();
      return "Empate";
    } else {
      return `Próximo jogador: ${isXNext ? "X" : "O"}`;
    }
  };

  return (
    <div className="tic-tac-toe">
      <h1> Tic Tac Toe</h1>
      <div className="status">{renderStatus()}</div>
      {renderResetButton()}
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default TicTacToe;
