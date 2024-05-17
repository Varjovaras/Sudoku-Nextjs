import { title } from "@/components/primitives";

const sudoku = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export default function DocsPage() {
	return (
		<div>
			<h1 className={title()}>Sudoku</h1>
			<div className="grid grid-cols-9">
				{sudoku.map((row, i) => {
					return (
						<div key={`${i.toString()}row`}>
							{row.map((cell, j) => {
								return (
									<div className="border p-4" key={`${j.toString()}${j}`}>
										{cell}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}
