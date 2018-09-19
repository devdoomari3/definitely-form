export declare class FieldSpec<FieldValue, FieldValueParsed> {
    parse: (value: FieldValue) => FieldValueParsed | undefined;
    protected value: FieldValue;
    protected parsedValue: FieldValueParsed;
}
