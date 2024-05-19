import type {
	Box,
	Cell,
	SudokuGrid,
	SudokuGridOfBoxes,
	SudokuGridOfColumns,
} from "@/types/sudokuTypes";

//example cell
const cell: Cell = {
	value: 1,
};

export const newSudoku = (): SudokuGrid => {
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
	const tempCell: Cell = { value: 1 };
	const tempBox: Box = [
		[tempCell, tempCell, tempCell],
		[tempCell, tempCell, tempCell],
		[tempCell, tempCell, tempCell],
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

export const getBoxes = (grid: SudokuGrid): SudokuGridOfBoxes => {
	const box: SudokuGridOfBoxes = newSudokuGridOfBoxes();
	//i represents the three rows of boxes
	//j represents the three boxes in a row
	//k is the index of row of cells inside a box
	//o is the actual index of the cell inside a box
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
 *doesnt complete boxes, only for testing purposes
 */
export const newCompletedSudoku = (): SudokuGrid => {
	const cells: Cell[] = [
		{ value: 1 },
		{ value: 2 },
		{ value: 3 },
		{ value: 4 },
		{ value: 5 },
		{ value: 6 },
		{ value: 7 },
		{ value: 8 },
		{ value: 9 },
	];

	const sudoku = newSudoku();
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			let index = i + j;
			if (index > 8) {
				index -= 9;
			}
			sudoku[i][j] = cells[index];
		}
	}

	return sudoku;
};
