import type {
	Box,
	Cell,
	SudokuGrid,
	SudokuGridOfBoxes,
	SudokuGridOfColumns,
} from "@/types/sudokuTypes";

//example cell

export const newSudoku = (): SudokuGrid => {
	const cell: Cell = null;

	const sudoku: SudokuGrid = [
		[cell, cell, cell, cell, cell, cell, cell, cell, cell],
		[cell, cell, cell, cell, cell, cell, cell, cell, cell],
		[cell, cell, cell, cell, cell, cell, cell, cell, cell],
		[cell, cell, cell, cell, cell, cell, cell, cell, cell],
		[cell, cell, cell, cell, cell, cell, cell, cell, cell],
		[cell, cell, cell, cell, cell, cell, cell, cell, cell],
		[cell, cell, cell, cell, cell, cell, cell, cell, cell],
		[cell, cell, cell, cell, cell, cell, cell, cell, cell],
		[cell, cell, cell, cell, cell, cell, cell, cell, cell],
	];

	return sudoku;
};

export const newBox = (): Box => {
	const cell: Cell = null;
	const tempBox: Box = [
		[cell, cell, cell],
		[cell, cell, cell],
		[cell, cell, cell],
	];
	return tempBox;
};

export const newSudokuGridOfBoxes = (): SudokuGridOfBoxes => {
	return [
		[newBox(), newBox(), newBox()],
		[newBox(), newBox(), newBox()],
		[newBox(), newBox(), newBox()],
	];
};

//:D
//i represents the three rows of boxes
//j represents the three boxes in a row
//k is the index of row of cells inside a box
//o is the actual index of the cell inside a box
export const getBoxes = (grid: SudokuGrid): SudokuGridOfBoxes => {
	const box: SudokuGridOfBoxes = newSudokuGridOfBoxes();
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			for (let k = 0; k < 3; k++) {
				for (let o = 0; o < 3; o++) {
					box[i][j][k][o] = grid[i * 3 + k][j * 3 + o];
				}
			}
		}
	}
	return box;
};

export const getColumns = (grid: SudokuGrid): SudokuGridOfColumns => {
	const columns = newSudoku();

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			columns[j][i] = grid[i][j];
		}
	}

	return columns;
};

/**
 * Example completed sudoku
 */
export const newCompletedSudoku = (): SudokuGrid => {
	const sudoku: SudokuGrid = [
		[1, 9, 4, 8, 6, 5, 2, 3, 7],
		[7, 3, 5, 4, 1, 2, 9, 6, 8],
		[8, 6, 2, 3, 9, 7, 1, 4, 5],
		[9, 2, 1, 7, 4, 8, 3, 5, 6],
		[6, 7, 8, 5, 3, 1, 4, 2, 9],
		[4, 5, 3, 9, 2, 6, 8, 7, 1],
		[3, 8, 9, 6, 5, 4, 7, 1, 2],
		[2, 4, 6, 1, 7, 9, 5, 8, 3],
		[5, 1, 7, 2, 8, 3, 6, 9, 4],
	];

	return sudoku;
};
