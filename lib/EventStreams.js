"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BehaviorSubject_1 = require("rxjs/BehaviorSubject");
const ObjectMap_1 = require("./utils/ObjectMap");
function createEventStreams(fieldsSpec) {
    const focusStreams = ObjectMap_1.mapObject(() => (new BehaviorSubject_1.BehaviorSubject(false)), fieldsSpec);
    const changeStreams = ObjectMap_1.mapObject((fieldSpec, key) => (new BehaviorSubject_1.BehaviorSubject(null)), fieldsSpec);
    return {
        focusStreams,
        changeStreams,
    };
}
exports.createEventStreams = createEventStreams;
