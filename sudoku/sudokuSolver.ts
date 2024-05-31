import type { SudokuGrid } from "@/types/sudokuTypes";
import { isSudokuNumber, newCompletedSudoku } from "./sudokuHelpers";
import { checkCompletedSudoku } from "./sudokuChecker";

export const solveSudoku = (grid: SudokuGrid): boolean => {
	const firstEmptyCoordinates = findFirstEmpty(grid);
	if (!firstEmptyCoordinates) return true;

	const [row, col] = firstEmptyCoordinates;
	for (let i = 1; i < 10; i++) {
		if (isAssignable(grid, row, col, i) && isSudokuNumber(i)) {
			grid[row][col] = i;
			if (solveSudoku(grid)) {
				return true;
			}

			grid[row][col] = null;
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
