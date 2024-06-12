import type {
  Box,
  Cell,
  SudokuGrid,
  SudokuGridOfBoxes,
  SudokuGridOfColumns,
  SudokuNumber,
} from "@/types/sudokuTypes";

export const newSudoku = (): SudokuGrid => {
  const cell: Cell = {
    value: null,
    preArranged: false,
  };

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
  const cell: Cell = {
    value: null,
    preArranged: false,
  };

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
//:D
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
 * missing numbers 6, 7, 8, 9 in order
 */
export const newCompletedSudoku = (): SudokuGrid => {
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
      newSudokuNumber(7),
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

export const isSudokuNumber = (i: number): i is SudokuNumber => {
  return i >= 1 && i <= 9;
};

export const newSudokuNumber = (value?: SudokuNumber): Cell => {
  return value
    ? {
        value,
        preArranged: true,
      }
    : {
        value: null,
        preArranged: false,
      };
};

export const makeSudokuImmutable = (sudoku: SudokuGrid): SudokuGrid => {
  for (const row of sudoku) {
    for (const cell of row) {
      if (!cell.preArranged) {
        cell.preArranged = true;
      }
    }
  }
  return sudoku;
};
