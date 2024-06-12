import type { FC } from "react";
import { Button } from "@nextui-org/button";

interface solvedProps {
  setSolvedSudoku: () => void;
}

export const SolveSudokuButton: FC<solvedProps> = ({ setSolvedSudoku }) => {
  return (
    <div className="">
      <Button color="primary" type="button" onClick={setSolvedSudoku}>
        solved?
      </Button>
    </div>
  );
};
