import fill from ".";
import { Matrix } from "../types";

describe("Test of fill()", () => {
  test("", () => {
    // GIVEN
    const matrix: Matrix = [[1]];

    // WHEN
    const actual = fill(matrix);

    // THEN
    const expected: Matrix = [
      [1, 2],
      [4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("", () => {
    // GIVEN
    const matrix: Matrix = [
      [7, 8, 9],
      [6, 1, 2],
      [5, 4, 3],
    ];

    // WHEN
    const actual = fill(matrix);

    // THEN
    const expected: Matrix = [
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
      [16, 15, 14, 13],
    ];
    expect(actual).toEqual(expected);
  });
});
