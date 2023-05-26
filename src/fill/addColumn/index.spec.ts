import addColumn from ".";
import { Matrix } from "../../types";

describe("Test of addColumn()", () => {
  test("", () => {
    // GIVEN
    const matrix = [[1]];

    // WHEN
    const actual = addColumn(matrix);

    // THEN
    const expected: Matrix = [[1, 2]];
    expect(actual).toEqual(expected);
  });

  test("", () => {
    // GIVEN
    const matrix = [
      [7, 8, 9],
      [6, 1, 2],
      [5, 4, 3],
    ];

    // WHEN
    const actual = addColumn(matrix);

    // THEN
    const expected: Matrix = [
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
    ];
    expect(actual).toEqual(expected);
  });
});
