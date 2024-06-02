/***
 * test file
 */

import { returnCorrectSudoku } from "./sudoku/sudokuSolver";
import type { SudokuGrid } from "./types/sudokuTypes";

const sud: SudokuGrid = [
	[null, null, 7, null, 9, 6, null, null, 2],
	[null, null, 4, null, null, null, null, null, null],
	[3, null, null, 2, 1, 8, 7, null, 5],
	[null, 6, 3, null, null, null, null, null, 9],
	[null, 1, null, 9, null, null, 3, 7, 8],
	[9, null, null, 3, null, 4, null, null, 1],
	[null, null, 2, 5, null, 1, null, null, null],
	[null, null, null, null, null, null, null, null, 7],
	[null, null, null, null, null, null, null, null, null],
];

console.log(returnCorrectSudoku(sud));
