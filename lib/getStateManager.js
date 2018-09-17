"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RxJSStateManager_1 = require("./RxJSStateManager");
const CreateField_1 = require("./types/CreateField");
function createFormState(getFields, initialValues) {
    const fieldsSpec = getFields(CreateField_1.createField);
    function withRxjsManager(args) {
        const { toStreamValidator, } = args;
        return new RxJSStateManager_1.RxJSStateManager({
            initialValues,
            fieldsSpec,
            toStreamValidator,
        });
    }
    return {
        withRxjsManager,
    };
}
exports.createFormState = createFormState;
