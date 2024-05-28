import type { Cell } from "@/types/sudokuTypes";
import type { FC } from "react";

interface SudokuButtonProps {
	cell: Cell;
	j: number;
}

export const SudokuButton: FC<SudokuButtonProps> = ({ cell, j }) => {
	return (
		<button className="border p-4" type="button" key={`${j.toString()}${j}`}>
			{cell}
		</button>
	);
};
