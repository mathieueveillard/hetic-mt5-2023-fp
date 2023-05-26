import rotate from ".";
import { Matrix } from "../types";

describe("Test of rotate()", () => {
  test("", () => {
    // GIVEN
    const matrix: Matrix = [[1]];

    // WHEN
    const actual = rotate(matrix);

    // THEN
    const expected: Matrix = [[1]];
    expect(actual).toEqual(expected);
  });

  test("", () => {
    // GIVEN
    const matrix: Matrix = [[1, 2]];

    // WHEN
    const actual = rotate(matrix);

    // THEN
    const expected: Matrix = [[2, 1]];
    // expect(matrix).toEqual([[1, 2]]);
    expect(actual).toEqual(expected);
  });

  test("", () => {
    // GIVEN
    const matrix: Matrix = [
      [1, 2],
      [3, 4],
    ];

    // WHEN
    const actual = rotate(matrix);

    // THEN
    const expected: Matrix = [
      [4, 3],
      [2, 1],
    ];
    expect(actual).toEqual(expected);
  });
});
