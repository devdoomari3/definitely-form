export abstract class BaseUsernameError extends Error {
  abstract message: string;
}

export class UsernameTaken extends BaseUsernameError {
  message = 'Username taken';
}

export class UsernameTooShort extends BaseUsernameError {
  message = 'Username Too Short';
}
