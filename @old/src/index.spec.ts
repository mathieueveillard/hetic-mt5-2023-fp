// -- Immutability --
// const (JS)
// readonly (TS)
// Readonly (TS)
// DeepReadonly (Yahia)
// spread operator
// (fun: lenses)
// immutability libraries: ImmutableJS, ImmerJS

import { Lens, composeLensWithReducer } from "./utils/Lens";
import { Reducer } from "./utils/Reducer";
import { flow } from "./utils/flow";

type Drink = "COFFEE" | "TEA" | "CHOCOLATE";

type Value<Unit extends "Euro"> = {
  value: number;
  unit: Unit;
};

type Money = Value<"Euro">;

const money = (value: number): Money => ({
  value,
  unit: "Euro",
});

type NumberOfDrinksSold = Record<Drink, number>;

type Turnover = Money;

type Statistics = {
  drinks: NumberOfDrinksSold;
  turnover: Turnover;
};

const PRICES: Record<Drink, Money> = {
  COFFEE: money(2),
  TEA: money(4.5),
  CHOCOLATE: money(6),
};

const blankStatistics: Statistics = {
  drinks: {
    COFFEE: 0,
    TEA: 0,
    CHOCOLATE: 0,
  },
  turnover: money(0),
};

const createDrinkLens = (drink: Drink): Lens<NumberOfDrinksSold, number> => ({
  get: (record) => record[drink],
  set: (record, updatedCount) => ({
    ...record,
    [drink]: updatedCount,
  }),
});

const increment: Reducer<number> = (n) => n + 1;

const updateNumberOfDrinksSold = (drink: Drink) => composeLensWithReducer(createDrinkLens(drink), increment);

const updateTurnover =
  (drink: Drink): Reducer<Turnover> =>
  (money) => {
    // Todo: handle the case where money and PRICES[drink] do **NOT** have the same unit (should not happen)
    return {
      value: money.value + PRICES[drink].value,
      unit: "Euro",
    };
  };

const numberOfDrinksSoldLens: Lens<Statistics, NumberOfDrinksSold> = {
  get: (statistics) => statistics.drinks,
  set: (statistics, drinks) => ({
    ...statistics,
    drinks,
  }),
};

const turnoverLens: Lens<Statistics, Turnover> = {
  get: (statistics) => statistics.turnover,
  set: (statistics, turnover) => ({
    ...statistics,
    turnover,
  }),
};

const updateStatistics = (drink: Drink): Reducer<Statistics> =>
  flow(
    composeLensWithReducer(numberOfDrinksSoldLens, updateNumberOfDrinksSold(drink)),
    composeLensWithReducer(turnoverLens, updateTurnover(drink))
  );

test("", () => {
  const actual = updateStatistics("COFFEE")(blankStatistics);
  const expected: Statistics = {
    drinks: {
      COFFEE: 1,
      TEA: 0,
      CHOCOLATE: 0,
    },
    turnover: money(2),
  };
  expect(actual).toEqual(expected);
});
