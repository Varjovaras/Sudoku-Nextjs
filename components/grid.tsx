import type { Cell, SudokuGrid } from "@/types/sudokuTypes";
import { useState, type FC } from "react";
import { SudokuButton } from "./sudokuButton";

interface GridProps {
	sudoku: SudokuGrid;
}

export const Grid: FC<GridProps> = ({ sudoku }) => {
	return (
		<div className="grid grid-cols-9">
			{sudoku.map((row, i) => (
				<div key={`${i.toString()}row`}>
					{row.map((cell, j) => {
						if (cell !== null) {
							return <SudokuButton cell={cell} j={j} />;
						}
						return (
							<input
								type="number"
								className="border p-4"
								key={`${j.toString()}${j}`}
							/>
						);
					})}
				</div>
			))}
		</div>
	);
};
