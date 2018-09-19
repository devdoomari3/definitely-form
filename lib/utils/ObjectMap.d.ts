export declare type KeyedObject = {
    [key in string]: any;
};
export declare type MapperFunction<A, B> = {
    a: A;
    b: B;
};
export declare function mapObject<T extends KeyedObject, B>(transform: (value: T[typeof key], key: keyof T) => B, originalObject: T): {
    [key in keyof T]: B;
};
