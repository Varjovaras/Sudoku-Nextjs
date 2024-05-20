"use client";
import { title } from "@/components/primitives";
import { checkCompletedSudoku } from "@/sudoku/solver";
import { newCompletedSudoku } from "@/sudoku/sudokuHelpers";
import { useState } from "react";

export default function DocsPage() {
	const [sudoku, _setSudoku] = useState(newCompletedSudoku());
	return (
		<section>
			<h1 className={title()}>Sudoku</h1>
			<div className="grid grid-cols-9">
				{sudoku.map((row, i) => {
					return (
						<div key={`${i.toString()}row`}>
							{row.map((cell, j) => {
								return (
									<button
										className="border p-4"
										type="button"
										key={`${j.toString()}${j}`}
									>
										{cell}
									</button>
								);
							})}
						</div>
					);
				})}
			</div>
			<button type="button" onClick={() => checkCompletedSudoku(sudoku)}>
				solved?
			</button>
		</section>
	);
}
