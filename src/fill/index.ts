import { Matrix } from "../types";
import addColumn from "./addColumn";
import addLine from "./addLine";

const fill = (matrix: Matrix): Matrix => {
  return addLine(addColumn(matrix));
};

export default fill;
