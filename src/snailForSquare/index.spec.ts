import snailForSquare from ".";
import { Matrix } from "../types";

describe("Test of snailForSquare()", () => {
  test("", () => {
    // GIVEN
    // WHEN
    const actual = snailForSquare(1);

    // THEN
    const expected: Matrix = [[1]];
    expect(actual).toEqual(expected);
  });

  test("", () => {
    // GIVEN
    // WHEN
    const actual = snailForSquare(2);

    // THEN
    const expected: Matrix = [
      [1, 2],
      [4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("", () => {
    // GIVEN
    // WHEN
    const actual = snailForSquare(3);

    // THEN
    const expected: Matrix = [
      [7, 8, 9],
      [6, 1, 2],
      [5, 4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("", () => {
    // GIVEN
    // WHEN
    const actual = snailForSquare(5);

    // THEN
    const expected: Matrix = [
      [21, 22, 23, 24, 25],
      [20, 7, 8, 9, 10],
      [19, 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ];
    expect(actual).toEqual(expected);
  });
});
