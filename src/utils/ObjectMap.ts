import {
  mapObjIndexed,
} from 'ramda';
export type KeyedObject = {
  [key in string]: any;
};

export type MapperFunction<A, B> = {
  a: A;
  b: B;
};

// type GenericAny<T> = any | T;
export function mapObject<
  T extends KeyedObject,
  B
> (
  transform: (value: T[typeof key], key: keyof T) => B,
  originalObject: T,
): {
  [key in keyof T]: B
} {
  return mapObjIndexed(transform, originalObject) as any;
}
