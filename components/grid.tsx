import type { SudokuGrid, SudokuNumber } from "@/types/sudokuTypes";
import { useRef, type FC } from "react";
import { SudokuSquare } from "./sudokuSquare";
import { SudokuInput } from "./sudokuInput";

import "../styles/gridStyles.css";

interface GridProps {
	sudoku: SudokuGrid;
	updateSudoku: (i: number, j: number, num: SudokuNumber) => void;
}

export const Grid: FC<GridProps> = ({ sudoku, updateSudoku }) => {
	const ref = useRef(null);

	return (
		<div className="p-4 overflow-auto">
			{sudoku.map((row, i) => (
				<div
					className="grid  grid-cols-9 "
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
