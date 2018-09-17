"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
// type GenericAny<T> = any | T;
function mapObject(transform, originalObject) {
    return ramda_1.mapObjIndexed(transform, originalObject);
}
exports.mapObject = mapObject;
