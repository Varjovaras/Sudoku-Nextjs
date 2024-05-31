import type { SudokuGrid, SudokuNumber } from "@/types/sudokuTypes";
import { newCompletedSudoku } from "./sudokuHelpers";

const sudokuSolver = (grid: SudokuGrid): SudokuGrid => {
	return newCompletedSudoku();
};

const solveSudoku = (grid: SudokuGrid): boolean => {
	const firstEmptyCoordinates = findFirstEmpty(grid);
	if (!firstEmptyCoordinates) return true;
	const [row, col] = firstEmptyCoordinates;
	for (let i = 1; i < 10; i++) {
		if (
			isAssignable(
				grid,
				firstEmptyCoordinates[0],
				firstEmptyCoordinates[1],
				i,
			) &&
			isSudokuNumber(i)
		) {
			grid[row][col] = i;
		}
	}

	return false;
};

const findFirstEmpty = (grid: SudokuGrid): [number, number] | null => {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === null) {
				return [i, j];
			}
		}
	}
	return null; // return null if no empty cell is found
};

const isAssignable = (
	grid: SudokuGrid,
	row: number,
	col: number,
	num: number,
): boolean => {
	for (let x = 0; x < 9; x++) {
		if (grid[row][x] === num || grid[x][col] === num) {
			return false;
		}
	}

	const startRow = row - (row % 3);
	const startCol = col - (col % 3);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (grid[i + startRow][j + startCol] === num) {
				return false;
			}
		}
	}

	return true;
};

const isSudokuNumber = (i: number): i is SudokuNumber => {
	return i >= 1 && i <= 9;
};
