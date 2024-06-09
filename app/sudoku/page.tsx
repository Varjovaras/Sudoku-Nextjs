"use client";
import { Grid } from "@/components/grid";
import { title } from "@/components/primitives";
import { SolvedSudoku } from "@/components/solvedSudoku";
import { checkCompletedSudoku } from "@/sudoku/sudokuChecker";
import { newCompletedSudokuWithOneMissing } from "@/tests/testHelpers";
import type { SudokuNumber, SudokuGrid } from "@/types/sudokuTypes";
import { useState } from "react";

export default function DocsPage() {
  const [sudoku, setSudoku] = useState(newCompletedSudokuWithOneMissing());
  const [solved, setSolved] = useState(false);

  const setSolvedSudoku = () => {
    setSolved(checkCompletedSudoku(sudoku));
  };

  const updateSudoku = (i: number, j: number, num: SudokuNumber) => {
    const newSudoku: SudokuGrid = [...sudoku];
    newSudoku[i][j] = num;
    setSudoku(newSudoku);
  };

  return (
    <section>
      <h1 className={title()}>Sudoku</h1>
      <Grid sudoku={sudoku} updateSudoku={updateSudoku} />
      <SolvedSudoku solved={solved} setSolvedSudoku={setSolvedSudoku} />
    </section>
  );
}
