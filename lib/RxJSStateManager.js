"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const immer_1 = __importDefault(require("immer"));
const BehaviorSubject_1 = require("rxjs/BehaviorSubject");
const EventStreams_1 = require("./EventStreams");
const ObjectMap_1 = require("./utils/ObjectMap");
class RxJSStateManager {
    constructor(args) {
        const { initialValues, fieldsSpec, } = args;
        this.eventStreams = EventStreams_1.createEventStreams(fieldsSpec);
        this.formStateStream = new BehaviorSubject_1.BehaviorSubject({
            active: null,
            touched: {},
            edited: {},
            values: {},
            parsedValues: {},
        });
        this.derivedStateStream = args.toStreamValidator(this.formStateStream, this.eventStreams);
        this.initialValues = initialValues || {};
        this.fieldsSpec = fieldsSpec;
        this.inputEventHandlers = ObjectMap_1.mapObject((value, key) => this.createEventHandlersFor(key, fieldsSpec), fieldsSpec);
    }
    createEventHandlersFor(fieldName, fieldsSpec) {
        // tslint:disable no-this-assignment
        const self = this;
        return {
            onBlur() {
                self.formStateStream.next(immer_1.default(self.formStateStream.value, formState => {
                    formState.active = null;
                }));
                self.eventStreams.focusStreams[fieldName].next(false);
            },
            onFocus() {
                self.formStateStream.next(immer_1.default(self.formStateStream.value, (formState) => {
                    const f = formState;
                    f.touched[fieldName] = true;
                    f.active = fieldName;
                }));
                self.eventStreams.focusStreams[fieldName].next(true);
            },
            onChange(value) {
                self.formStateStream.next(immer_1.default(self.formStateStream.value, (formState) => {
                    const f = formState;
                    f.edited[fieldName] = true;
                    f.values[fieldName] = value;
                    const parser = fieldsSpec[fieldName];
                    f.parsedValues[fieldName] = parser.parse && parser.parse(value);
                }));
                self.eventStreams.changeStreams[fieldName].next(value);
            },
        };
    }
}
exports.RxJSStateManager = RxJSStateManager;
