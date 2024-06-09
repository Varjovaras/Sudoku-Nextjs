import { newSudokuNumber } from "@/sudoku/sudokuHelpers";
import type { SudokuGrid } from "@/types/sudokuTypes";

//test helper
export const newCompletedSudokuWithOneMissing = (): SudokuGrid => {
	const sudoku: SudokuGrid = [
		[
			newSudokuNumber(1),
			newSudokuNumber(9),
			newSudokuNumber(4),
			newSudokuNumber(8),
			newSudokuNumber(6),
			newSudokuNumber(5),
			newSudokuNumber(2),
			newSudokuNumber(3),
			newSudokuNumber(7),
		],
		[
			newSudokuNumber(7),
			newSudokuNumber(3),
			newSudokuNumber(5),
			newSudokuNumber(4),
			newSudokuNumber(1),
			newSudokuNumber(2),
			newSudokuNumber(9),
			newSudokuNumber(6),
			newSudokuNumber(8),
		],
		[
			newSudokuNumber(8),
			newSudokuNumber(6),
			newSudokuNumber(2),
			newSudokuNumber(3),
			newSudokuNumber(9),
			newSudokuNumber(),
			newSudokuNumber(1),
			newSudokuNumber(4),
			newSudokuNumber(5),
		],
		[
			newSudokuNumber(9),
			newSudokuNumber(2),
			newSudokuNumber(1),
			newSudokuNumber(7),
			newSudokuNumber(4),
			newSudokuNumber(8),
			newSudokuNumber(3),
			newSudokuNumber(5),
			newSudokuNumber(6),
		],
		[
			newSudokuNumber(6),
			newSudokuNumber(7),
			newSudokuNumber(8),
			newSudokuNumber(5),
			newSudokuNumber(3),
			newSudokuNumber(1),
			newSudokuNumber(4),
			newSudokuNumber(2),
			newSudokuNumber(9),
		],
		[
			newSudokuNumber(4),
			newSudokuNumber(5),
			newSudokuNumber(3),
			newSudokuNumber(9),
			newSudokuNumber(2),
			newSudokuNumber(6),
			newSudokuNumber(8),
			newSudokuNumber(7),
			newSudokuNumber(1),
		],
		[
			newSudokuNumber(3),
			newSudokuNumber(8),
			newSudokuNumber(9),
			newSudokuNumber(6),
			newSudokuNumber(5),
			newSudokuNumber(4),
			newSudokuNumber(7),
			newSudokuNumber(1),
			newSudokuNumber(2),
		],
		[
			newSudokuNumber(2),
			newSudokuNumber(4),
			newSudokuNumber(6),
			newSudokuNumber(1),
			newSudokuNumber(7),
			newSudokuNumber(9),
			newSudokuNumber(5),
			newSudokuNumber(8),
			newSudokuNumber(3),
		],
		[
			newSudokuNumber(5),
			newSudokuNumber(1),
			newSudokuNumber(7),
			newSudokuNumber(2),
			newSudokuNumber(8),
			newSudokuNumber(3),
			newSudokuNumber(6),
			newSudokuNumber(9),
			newSudokuNumber(4),
		],
	];

	return sudoku;
};
//test helper
export const newCompletedSudokuWithLotMissing = (): SudokuGrid => {
	const sudoku: SudokuGrid = [
		[
			newSudokuNumber(),
			newSudokuNumber(9),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(5),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(7),
		],
		[
			newSudokuNumber(7),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(1),
			newSudokuNumber(),
			newSudokuNumber(9),
			newSudokuNumber(),
			newSudokuNumber(),
		],
		[
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(9),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(4),
			newSudokuNumber(5),
		],
		[
			newSudokuNumber(9),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(7),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
		],
		[
			newSudokuNumber(),
			newSudokuNumber(7),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(3),
			newSudokuNumber(1),
			newSudokuNumber(),
			newSudokuNumber(2),
			newSudokuNumber(),
		],
		[
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(3),
			newSudokuNumber(),
			newSudokuNumber(2),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(1),
		],
		[
			newSudokuNumber(3),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(4),
			newSudokuNumber(7),
			newSudokuNumber(),
			newSudokuNumber(),
		],
		[
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(6),
			newSudokuNumber(1),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(3),
		],
		[
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(),
			newSudokuNumber(6),
			newSudokuNumber(),
			newSudokuNumber(),
		],
	];
	return sudoku;
};
