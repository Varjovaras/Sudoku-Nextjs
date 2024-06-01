import { newCompletedSudoku } from "@/sudoku/sudokuHelpers";

import { solveSudoku } from "@/sudoku/sudokuSolver";
import { expect, test } from "bun:test";
import {
	newCompletedSudokuWithOneMissing,
	newCompletedSudokuWithLotMissing,
} from "./testHelpers";

test("Sudoku solver works with a few missing", () => {
	const completedSudoku = newCompletedSudoku();
	const notCompletedSudoku = newCompletedSudokuWithOneMissing();
	solveSudoku(notCompletedSudoku);
	expect(notCompletedSudoku).toEqual(completedSudoku);
});

test("Sudoku solver works with a lot missing", () => {
	const completedSudoku = newCompletedSudoku();
	const notCompletedSudoku = newCompletedSudokuWithLotMissing();
	solveSudoku(notCompletedSudoku);
	expect(notCompletedSudoku).toEqual(completedSudoku);
});
