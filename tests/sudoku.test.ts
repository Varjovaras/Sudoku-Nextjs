import {
	newCompletedSudoku,
	newCompletedSudokuWithLotMissing,
	newCompletedSudokuWithMissing,
} from "@/sudoku/sudokuHelpers";
import { solveSudoku } from "@/sudoku/sudokuSolver";
import { expect, test } from "bun:test";

test("Sudoku solver works with a few missing", () => {
	const completedSudoku = newCompletedSudoku();
	const notCompletedSudoku = newCompletedSudokuWithMissing();
	solveSudoku(notCompletedSudoku);
	expect(notCompletedSudoku).toEqual(completedSudoku);
});

test("Sudoku solver works with a lot missing", () => {
	const completedSudoku = newCompletedSudoku();
	const notCompletedSudoku = newCompletedSudokuWithLotMissing();
	solveSudoku(notCompletedSudoku);
	expect(notCompletedSudoku).toEqual(completedSudoku);
});
