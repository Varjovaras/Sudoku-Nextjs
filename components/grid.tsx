import type { SudokuGrid, SudokuNumber } from "@/types/sudokuTypes";
import type { FC } from "react";
import { SudokuSquare } from "./sudokuSquare";
import { isSudokuNumber } from "@/sudoku/sudokuHelpers";

interface GridProps {
  sudoku: SudokuGrid;
  updateSudoku: (i: number, j: number, num: SudokuNumber) => void;
}

export const Grid: FC<GridProps> = ({ sudoku, updateSudoku }) => {
  return (
    <div className="grid grid-cols-9">
      {sudoku.map((row, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={`row-${i}`}
        >
          {row.map((cell, j) => {
            if (cell?.preArranged) {
              return (
                <SudokuSquare
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={`cell-${i}-${j}`}
                  cell={cell}
                  j={j}
                />
              );
            }
            return (
              <input
                type="number"
                className="border p-4"
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={`input-${i}-${j}`}
                onChange={(event) => {
                  const num = Number(event.target.value);
                  if (isSudokuNumber(num)) {
                    updateSudoku(i, j, num);
                  }
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
