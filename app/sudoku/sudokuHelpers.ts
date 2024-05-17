import type { Box, Cell, SudokuGrid } from "@/types/sudokuTypes";

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

export type SudokuGridOfBoxes = [
	[Box, Box, Box],
	[Box, Box, Box],
	[Box, Box, Box],
];

export const newBox = (): Box => {
	const tempCell: Cell = { value: 1 };
	const tempBox: Box = [
		[tempCell, tempCell, tempCell],
		[tempCell, tempCell, tempCell],
		[tempCell, tempCell, tempCell],
	];
	return tempBox;
};

export const getBoxes = (grid: SudokuGrid): SudokuGridOfBoxes => {
	const boxes: SudokuGridOfBoxes = [
		[newBox(), newBox(), newBox()],
		[newBox(), newBox(), newBox()],
		[newBox(), newBox(), newBox()],
	];
	//iterate 3 times
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			for (let k = 0; k < 3; k++) {
				for (let o = 0; o < 3; o++) {
					boxes[i][j][k][o] = grid[i * 3 + k][j * 3 + o];
				}
			}
		}
	}
	return boxes;
};
