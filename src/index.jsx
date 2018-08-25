import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a].text && squares[a].text === squares[b].text && squares[a].text === squares[c].text) {
      return { winner: squares[a].text, winSquares: lines[i] };
    }
  }
  return { winner: null, winSquares: [] };
}

function Square(props) {
  const classNameArr = ['square'];

  if (props.value['isWinSquare']) {
    classNameArr.push('win-square');
  }
  if (props.value['isCurrent']) {
    classNameArr.push('current');
  }

  return React.createElement(
    'button',
    {
      className: classNameArr.join(' '),
      onClick: props.onclick
    },
    props.value.text,
  );
}

function getNext(xIsNext) {
  return xIsNext ? 'X' : 'O';
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onclick={() => this.props.onclick(i)}
      />
    )
  }

  renderBoardRow(i) {
    return (
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
    )
  }

  render() {
    return (
      <div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill({ text: null, isWinSquare: false, isCurrent: false }),
      }],
      xIsNext: true,
      stepNumber: 0
    };
  }

  static getStepPosition(i) {
    return {
      column: i % 3,
      row: Math.floor(i / 3),
    };
  }

  handleClick(i) {
    const { xIsNext, stepNumber } = this.state;
    const history = this.state.history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.map(item => ({ ...item }));
    const { winner } = calculateWinner(squares);
    const hasWinner = winner !== null;
    const stepPosition = Game.getStepPosition(i);

    if (hasWinner || squares[i].text) {
      return;
    }

    squares[i].text = getNext(xIsNext);
    squares.forEach((square, index) => {
      square.isCurrent = index === i;
    });

    this.setState({
      history: history.concat([{
        squares,
        stepPosition,
      }]),
      xIsNext: !xIsNext,
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const { winner, winSquares } = calculateWinner(current.squares);
    const hasWinner = winner !== null;

    const moves = history.map((step, move) => {
      const stepPosition = step.stepPosition;
      let stepPositionStr;

      if (stepPosition) {
        const row = step.stepPosition.row + 1;
        const column = step.stepPosition.column + 1;
        stepPositionStr = `第${row}行 第${column}列`;
      }
      const desc = move ? `go to move # ${move} ${stepPosition ? stepPositionStr : ''}` : `go to game start`;

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });

    if (hasWinner) {
      current.squares.forEach((square, index) => {
        if (~winSquares.indexOf(index)) {
          square['isWinSquare'] = true;
        }
      });

      status = `The winner is: ${ winner }`;
    } else {
      status = `Next player: ${ getNext(xIsNext) }`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            xIsNext={xIsNext}
            onclick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

ReactDom.render(
  <Game/>
  , document.getElementById('app'));