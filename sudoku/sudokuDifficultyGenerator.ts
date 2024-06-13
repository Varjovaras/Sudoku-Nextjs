import type { SudokuGrid } from "@/types/sudokuTypes";

export const makeSudokuEasy = (sudoku: SudokuGrid): SudokuGrid => {
  for (const row of sudoku) {
    for (const cell of row) {
      if (Math.random() < 0.2) {
        cell.preArranged = false;
        cell.value = null;
      }
    }
  }
  return sudoku;
};
