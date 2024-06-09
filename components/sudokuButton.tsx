import type { Cell } from "@/types/sudokuTypes";
import type { FC } from "react";

interface SudokuButtonProps {
  cell: Cell;
  j: number;
}

export const SudokuButton: FC<SudokuButtonProps> = ({ cell, j }) => {
  return (
    <div
      className="border p-4"
      key={`${j.toString()}${j}${j}${cell?.toString()}`}
    >
      {cell}
    </div>
  );
};
