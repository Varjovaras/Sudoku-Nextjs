import type { FC } from "react";

interface solvedProps {
	solved: boolean;
}

export const SolvedSudoku: FC<solvedProps> = ({ solved }) => {
	return (
		<div>
			{solved && <div>solved sudoku</div>}
			{!solved && <div>not solved sudoku</div>}
		</div>
	);
};
