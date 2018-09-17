export abstract class BaseUsernameError extends Error {
  abstract name: string;
}

export class UsernameTaken extends BaseUsernameError {
  name = 'Username taken';
}

export class UsernameTooShort extends BaseUsernameError {
  name = 'Username Too Short';
}
