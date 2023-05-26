import { Cell, Line, Matrix } from "../types";

const printCell = (cell: Cell): string => {
  if (cell < 10) {
    return `  ${cell}`;
  }
  return ` ${cell}`;
};

const printLine = (line: Line): string => {
  return line.map(printCell).join("  ");
};

const print = (matrix: Matrix): string => {
  return matrix.map(printLine).join("\n\n");
};

export default print;
