"use client";
import { title } from "@/components/primitives";
import { SudokuButton } from "@/components/sudokuButton";
import { checkCompletedSudoku } from "@/sudoku/solver";
import { newCompletedSudoku } from "@/sudoku/sudokuHelpers";
import { useState } from "react";

export default function DocsPage() {
	const [sudoku, _setSudoku] = useState(newCompletedSudoku());
	return (
		<section>
			<h1 className={title()}>Sudoku</h1>
			<div className="grid grid-cols-9">
				{sudoku.map((row, i) => (
					<div key={`${i.toString()}row`}>
						{row.map((cell, j) => {
							if (cell !== null) {
								return <SudokuButton cell={cell} j={j} />;
							}

							return (
								<input className="border p-4" key={`${j.toString()}${j}`} />
							);
						})}
					</div>
				))}
			</div>
			<button type="button" onClick={() => checkCompletedSudoku(sudoku)}>
				solved?
			</button>
		</section>
	);
}
