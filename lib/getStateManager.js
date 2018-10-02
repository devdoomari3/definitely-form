"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const RxJSStateManager_1 = require("./RxJSStateManager");
const CreateField_1 = require("./types/CreateField");
function createFieldsGroup(getFields, initialValues) {
    const fieldsSpec = getFields(CreateField_1.createField);
    function withRxjsManager(args) {
        const { toStreamValidator, externalStateStream = new Observable_1.Observable(), } = args;
        return new RxJSStateManager_1.RxJSStateManager({
            initialValues,
            fieldsSpec,
            toStreamValidator,
            externalStateStream,
        });
    }
    return {
        withRxjsManager,
        fieldsSpec,
    };
}
exports.createFieldsGroup = createFieldsGroup;
