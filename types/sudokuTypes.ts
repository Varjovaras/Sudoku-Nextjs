export type SudokuNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Cell = SudokuNumber | null;
export type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]; // 9 cells in a row
export type Box = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];
export type Column = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell];
export type SudokuGrid = [Row, Row, Row, Row, Row, Row, Row, Row, Row]; // 9 rows in a grid
export type SudokuGridOfBoxes = [
	[Box, Box, Box],
	[Box, Box, Box],
	[Box, Box, Box],
];
export type SudokuGridOfColumns = [
	Column,
	Column,
	Column,
	Column,
	Column,
	Column,
	Column,
	Column,
	Column,
];
