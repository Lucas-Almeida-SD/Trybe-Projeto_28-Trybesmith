enum EErrors {
  invalidUsernameOrPassword = 'Username or password invalid',
  usernameRequired = '"username" is required',
  passwordRequired = '"password" is required',
  nameRequired = '"name" must be a string',
  nameString = '"name" must be a string',
  nameMin3Caracter = '"name" length must be at least 3 characters long',
  amountRequired = '"amount" must be a string',
  amountString = '"amount" must be a string',
  amountMin3Caracter = '"amount" length must be at least 3 characters long',
}

export default EErrors;