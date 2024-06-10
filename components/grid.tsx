import type { SudokuGrid, SudokuNumber } from "@/types/sudokuTypes";
import type { FC } from "react";
import { SudokuSquare } from "./sudokuSquare";
import { SudokuInput } from "./sudokuInput";

import "../styles/gridStyles.css";

interface GridProps {
	sudoku: SudokuGrid;
	updateSudoku: (i: number, j: number, num: SudokuNumber) => void;
}

export const Grid: FC<GridProps> = ({ sudoku, updateSudoku }) => {
	return (
		<div className="grid grid-cols-9 overflow-auto">
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
							<SudokuInput
								i={i}
								j={j}
								updateSudoku={updateSudoku}
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={`input-${i}-${j}`}
							/>
						);
					})}
				</div>
			))}
		</div>
	);
};
