import fill from "../fill";
import rotate from "../rotate";
import { Matrix } from "../types";

const snailForSquare = (size: number): Matrix => {
  if (size === 1) {
    return [[1]];
  }

  if (size % 2 === 0) {
    return fill(snailForSquare(size - 1));
  }

  return rotate(fill(rotate(snailForSquare(size - 1))));
};

export default snailForSquare;
