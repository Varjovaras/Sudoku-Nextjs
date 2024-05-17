"use client";
import { title } from "@/components/primitives";
import { useState } from "react";
import { newSudoku } from "./sudokuHelpers";

const [sudoku, _setSudoku] = useState(newSudoku());

export default function DocsPage() {
  return (
    <section>
      <h1 className={title()}>Sudoku</h1>
      <div className="grid grid-cols-9">
        {sudoku.map((row, i) => {
          return (
            <div key={`${i.toString()}row`}>
              {row.map((cell, j) => {
                return (
                  <div className="border p-4" key={`${j.toString()}${j}`}>
                    {cell.value}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
