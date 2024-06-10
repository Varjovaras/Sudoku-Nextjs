import { isSudokuNumber } from "@/sudoku/sudokuHelpers";
import type { SudokuNumber } from "@/types/sudokuTypes";
import { useState, type FC } from "react";

interface InputProps {
	i: number;
	j: number;
	updateSudoku: (i: number, j: number, num: SudokuNumber) => void;
}

export const SudokuInput: FC<InputProps> = ({ i, j, updateSudoku }) => {
	const [inputValue, setInputValue] = useState("");

	return (
		<input
			type="text"
			className="input-no-spinner"
			pattern="\d*"
			value={inputValue}
			onChange={(event) => {
				let numStr = event.target.value;
				if (numStr.length > 1) {
					numStr = numStr.slice(-1); // get the last character of the string
				}
				const num = Number(numStr);
				if (isSudokuNumber(num)) {
					updateSudoku(i, j, num);
					setInputValue(num.toString()); // clear the input field
				}
			}}
		/>
	);
};
