import { Reducer } from "./Reducer";

export const flow =
  <State>(...reducers: Reducer<State>[]): Reducer<State> =>
  (state) =>
    reducers.reduce((acc, cur) => cur(acc), state);
