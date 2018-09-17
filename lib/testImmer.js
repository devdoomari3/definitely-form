"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = __importDefault(require("immer"));
const state = {
    a: 1,
    nested: {
        b: 3,
    },
};
const test2 = immer_1.default(state, s => {
    s.a = 3;
    s.nested.b = 5;
});
console.log(test2);
