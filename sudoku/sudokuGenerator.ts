import type { Cell, Row, SudokuGrid } from "@/types/sudokuTypes";
import { isSudokuNumber, newCompletedSudoku, newSudoku } from "./sudokuHelpers";

export const generateSudoku = (): SudokuGrid => {
	const grid = generateGrid();
	if (solveSudoku(grid, 0, 0)) {
		return grid;
	}
	throw new Error("incomplete sudoku");
};

const generateGrid = (): SudokuGrid => {
	const grid: SudokuGrid = newSudoku();
	const exampleCell: Cell = {
		value: null,
		preArranged: true,
	};
	for (let row = 0; row < 9; row++) {
		grid[row] = Array(9)
			.fill(null)
			.map(() => ({ ...exampleCell })) as Row;
	}
	console.log(grid);
	return grid;
};

const generateRandomSequence = (): number[] => {
	const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return sequence.sort(() => Math.random() - 0.5);
};

const solveSudoku = (grid: SudokuGrid, row: number, col: number): boolean => {
	if (row === 9) {
		return true;
	}

	if (grid[row][col].value !== null) {
		return solveSudoku(
			grid,
			col === 8 ? row + 1 : row,
			col === 8 ? 0 : col + 1,
		);
	}

	const sequence = generateRandomSequence();
	for (let i = 0; i < sequence.length; i++) {
		const num = sequence[i];
		if (
			row < grid.length &&
			isValid(row, col, num, grid) &&
			isSudokuNumber(num)
		) {
			grid[row][col].value = num;
			if (
				solveSudoku(grid, row + (col === 8 ? 1 : 0), col === 8 ? 0 : col + 1)
			) {
				return true; // Found solution, return true
			}
			grid[row][col].value = null; // Backtrack if placement doesn't lead to solution
		}
	}

	return false; // No valid placement found for current cell
};

const isValid = (
	row: number,
	col: number,
	num: number,
	grid: SudokuGrid,
): boolean => {
	// Check row
	for (let i = 0; i < 9; i++) {
		if (grid[row][i].value === num) return false;
	}

	// Check column
	for (let i = 0; i < 9; i++) {
		if (grid[i][col].value === num) return false;
	}

	// Check subgrid (3x3 box)
	const boxRowStart = Math.floor(row / 3) * 3;
	const boxColStart = Math.floor(col / 3) * 3;

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (grid[boxRowStart + i][boxColStart + j].value === num) return false;
		}
	}

	return true;
};
