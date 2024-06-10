import type { FC } from "react";

interface solvedProps {
  solved: boolean;
  setSolvedSudoku: () => void;
}

export const SolvedSudoku: FC<solvedProps> = ({ solved, setSolvedSudoku }) => {
  return (
    <div>
      {solved && <div>solved sudoku</div>}
      {!solved && <div>not solved sudoku</div>}
      <button type="button" onClick={setSolvedSudoku}>
        solved?
      </button>
    </div>
  );
};
