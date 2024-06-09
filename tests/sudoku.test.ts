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
	expect(notCompletedSudoku.length).toEqual(completedSudoku.length);
	for (let i = 0; i < notCompletedSudoku.length; i++) {
		for (let j = 0; j < notCompletedSudoku[i].length; j++) {
			expect(notCompletedSudoku[i][j].value).toEqual(
				completedSudoku[i][j].value,
			);
		}
	}
});

test("Sudoku solver works with a lot missing", () => {
	const completedSudoku = newCompletedSudoku();
	const notCompletedSudoku = newCompletedSudokuWithLotMissing();
	solveSudoku(notCompletedSudoku);

	expect(notCompletedSudoku.length).toEqual(completedSudoku.length);
	for (let i = 0; i < notCompletedSudoku.length; i++) {
		for (let j = 0; j < notCompletedSudoku[i].length; j++) {
			expect(notCompletedSudoku[i][j].value).toEqual(
				completedSudoku[i][j].value,
			);
		}
	}
});
