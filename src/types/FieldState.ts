export type FieldState<
  ValueType,
  ErrorType
> = {
  isActive?: boolean;
  error?: ErrorType;
  value?: ValueType;
};

// // props = {
// //   "values": {
// //     "email": "s"
// //   },
// //   "errors": {
// //     "email": "Invalid email address"
// //   },
// //   "touched": {
// //     "email": true
// //   },
// //   "isSubmitting": false,
// //   "dirty": true,
// //   "isValid": false
// // }

// import {
//   action,
//   observable,
// } from 'mobx';

// // Q. 여기에
// export class FieldState<FieldData= string> {
//   @observable value: FieldData | null = null;
//   @observable pristine: boolean = true;
//   @observable dirty: boolean = true;
//   @observable touched: boolean = false;
//   @observable isFocused: boolean = false;

//   @action
//   onBlur() {
//     // ...
//   }

//   @action
//   onFocus() {
//     // ...
//   }

//   @action
//   onChange(value: FieldData) {

//   }
// }
