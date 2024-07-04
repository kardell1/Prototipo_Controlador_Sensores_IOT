export function CustomError(name, message) {
    const error = new Error(message);
    error.name = name;
    error.errors = [{ message }];
    return error;
  }