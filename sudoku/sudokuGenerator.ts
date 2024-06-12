import type { SudokuGrid } from "@/types/sudokuTypes";
import { newSudoku } from "./sudokuHelpers";

export const generateSudoku = (): SudokuGrid => {
  const sudoku = newSudoku();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; i < 9; j++) {}
  }
  return sudoku;
};
