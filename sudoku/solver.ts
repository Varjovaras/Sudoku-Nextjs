import type {
	Box,
	Column,
	Row,
	SudokuGrid,
	SudokuNumber,
} from "@/types/sudokuTypes";
import { getBoxes, getColumns } from "./sudokuHelpers";

const isSafe = (
	grid: SudokuGrid,
	row: number,
	col: number,
	num: number,
): boolean => {
	// Check if num is not in the current row, column and 3x3 subgrid
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

export const checkCompletedSudoku = (grid: SudokuGrid): boolean => {
	const columns = getColumns(grid);
	for (let i = 0; i < 9; i++) {
		if (
			!checkSudokuRowOrColumn(grid[i]) ||
			!checkSudokuRowOrColumn(columns[i])
		) {
			console.log(
				`sudoku not completable in grid number ${i} with values ${grid[i]} or column number ${i} with values ${columns[i]}`,
			);
			return false;
		}
	}
	const boxes = getBoxes(grid);
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (!checkSudokuBox(boxes[i][j])) {
				console.log(
					`box not viable with the coordinates ${i} ${j} and the values of ${boxes[i][j]}`,
				);
				return false;
			}
		}
	}
	return true;
};

const checkSudokuRowOrColumn = (row: Row | Column): boolean => {
	const rowSet = new Set<SudokuNumber>();
	for (const cell of row) {
		if (!cell) {
			return false;
		}
		rowSet.add(cell);
	}
	return rowSet.size === 9;
};

const checkSudokuBox = (box: Box): boolean => {
	const rowSet = new Set<SudokuNumber>();
	for (const boxRow of box) {
		for (const cell of boxRow) {
			if (!cell) {
				return false;
			}
			rowSet.add(cell);
		}
	}
	return rowSet.size === 9;
};
