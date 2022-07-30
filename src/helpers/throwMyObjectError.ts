import generateError from './generateError';

export default (code: number, message: string) => {
  const myError = new Error(JSON.stringify(generateError(code, message)));
  myError.name = 'error object';

  throw myError;
};