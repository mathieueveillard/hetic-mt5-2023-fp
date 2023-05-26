import addLine from ".";
import { Matrix } from "../../types";

describe("Test of addLine()", () => {
  test("", () => {
    // GIVEN
    const matrix: Matrix = [[1, 2]];

    // WHEN
    const actual = addLine(matrix);

    // THEN
    const expected: Matrix = [
      [1, 2],
      [4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("", () => {
    // GIVEN
    const matrix = [
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
    ];

    // WHEN
    const actual = addLine(matrix);

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
