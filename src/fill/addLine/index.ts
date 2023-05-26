import { Matrix } from "../../types";
import numberOfColumns from "../../utils/numberOfColumns";
import numberOfLines from "../../utils/numberOfLines";

const addLine = (matrix: Matrix): Matrix => {
  const columns = numberOfColumns(matrix);
  const lines = numberOfLines(matrix);
  const actualMaximumValue = matrix[lines - 1][columns - 1];
  const additionalLine = Array.from(Array(columns), (_, index) => actualMaximumValue + 1 + index).reverse();
  return [...matrix, additionalLine];
};

export default addLine;

// Array(5) -> { length: 5 }
// [...Array(5)] -> { 0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, length: 5}
