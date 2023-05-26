import { Matrix } from "../../types";
import numberOfColumns from "../../utils/numberOfColumns";

const addColumn = (matrix: Matrix): Matrix => {
  const columns = numberOfColumns(matrix);
  const actualMaximumValue = matrix[0][columns - 1];
  return matrix.map((line, index) => [...line, actualMaximumValue + 1 + index]);
};

export default addColumn;
