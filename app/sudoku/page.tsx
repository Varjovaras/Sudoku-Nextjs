"use client";
import { Grid } from "@/components/grid";
import { title } from "@/components/primitives";
import { SolvedSudoku } from "@/components/solvedSudoku";
import { checkCompletedSudoku } from "@/sudoku/solver";
import { newCompletedSudoku } from "@/sudoku/sudokuHelpers";
import { useState } from "react";

export default function DocsPage() {
	const [sudoku, _setSudoku] = useState(newCompletedSudoku());
	const [solved, setSolved] = useState(false);

	const setSolvedSudoku = () => {
		setSolved(checkCompletedSudoku(sudoku));
	};

	return (
		<section>
			<h1 className={title()}>Sudoku</h1>
			<Grid sudoku={sudoku} />
			<button type="button" onClick={setSolvedSudoku}>
				solved?
			</button>
			<SolvedSudoku solved={solved} />
		</section>
	);
}
