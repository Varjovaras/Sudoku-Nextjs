type SudokuNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Cell = {
	// public: boolean;
	value: SudokuNumber;
};
type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]; // 9 cells in a row
type SudokuGrid = [Row, Row, Row, Row, Row, Row, Row, Row, Row]; // 9 rows in a grid
