import { Reducer } from "./Reducer";

type Getter<U, V> = (u: U) => V;

type Setter<U, V> = (u: U, v: V) => U;

export type Lens<U, V> = {
  get: Getter<U, V>;
  set: Setter<U, V>;
};

export const composeLensWithReducer = <U, V>(lens: Lens<U, V>, reducer: Reducer<V>): Reducer<U> => {
  return (u: U) => lens.set(u, reducer(lens.get(u)));
};
