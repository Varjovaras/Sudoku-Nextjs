"use client";
import { ErrorMessage } from "@/components/errorMessage";
import { Grid } from "@/components/grid";
import { title } from "@/components/primitives";
import { SolveSudokuButton } from "@/components/solveSudokuButton";
import { checkCompletedSudoku } from "@/sudoku/sudokuChecker";
import { generateSudoku } from "@/sudoku/sudokuGenerator";
import { makeSudokuImmutable } from "@/sudoku/sudokuHelpers";
import { newCompletedSudokuWithOneMissing } from "@/tests/testHelpers";
import type { SudokuNumber, SudokuGrid } from "@/types/sudokuTypes";
import { useState } from "react";

export default function DocsPage() {
	const [sudoku, setSudoku] = useState(newCompletedSudokuWithOneMissing());
	const [solved, setSolved] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const setSolvedSudoku = () => {
		const solved = checkCompletedSudoku(sudoku);
		if (!solved) {
			setErrorMessage("sudoku not complete");
			setTimeout(() => {
				setErrorMessage("");
			}, 5000);
			return;
		}
		setSudoku(makeSudokuImmutable(sudoku));
		setErrorMessage("");
		setSolved(solved);
	};

	const updateSudoku = (i: number, j: number, num: SudokuNumber) => {
		const newSudoku: SudokuGrid = [...sudoku];
		newSudoku[i][j].value = num;
		setSudoku(newSudoku);
	};

	const generateSubaru = () => {
		console.log(":D");
		setSudoku(generateSudoku());
	};

	return (
		<section>
			<h1 className={title()}>Sudoku</h1>
			<Grid sudoku={sudoku} updateSudoku={updateSudoku} />
			<ErrorMessage errorMessage={errorMessage} />
			<SolveSudokuButton setSolvedSudoku={setSolvedSudoku} />
			<button type="button" onClick={() => setSudoku(generateSudoku())}>
				123
			</button>
		</section>
	);
}
