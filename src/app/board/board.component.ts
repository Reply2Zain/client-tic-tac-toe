import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: string[] | any;
  xIsNext: boolean | any;
  winner: string | any;

  // Runs immediately when this class is created, usually to inject dependencies here
  constructor() { }

  // inital setup for your component, lifecycle
  ngOnInit(): void {
    this.newGame();
    console.log("hello")
  }

  newGame() {
    this.squares = Array(9).fill(null); // values spliced to x or o
    this.winner = "";
    this.xIsNext = true;
  }

  // typescript getter
  get player() {
    return this.xIsNext ? 'X' : 'O'; // true means x, false means o
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }
  }

  calculateWinner() {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    let total = 0;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
      if (this.squares[a] && this.squares[b] && this.squares[c]) {
        total++;
      }
    }
    if(total === 8) {
      return "tie"
    }
    return "";
  }



}
