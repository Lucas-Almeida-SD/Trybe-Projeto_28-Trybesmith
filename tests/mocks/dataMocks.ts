// Products -------------------------------------------------
export const nonExistentNameCreateProductRequest = {
  amount: '3 Gemas da Noite',
}

export const nonStringTypeNameCreateProductRequest = {
  name: 1,
  amount: '3 Gemas da Noite',
}

export const nameLengthNotAllowedCreateProductRequest = {
  name: 'Ar',
  amount: '3 Gemas da Noite',
}

export const nonExistentAmountCreateProductRequest = {
  name: 'Arco Escudo Invejável',
}

export const nonStringTypeAmountCreateProductRequest = {
  name: 'Arco Escudo Invejável',
  amount: 1,
}

export const amountLengthNotAllowedCreateProductRequest = {
  name: 'Arco Escudo Invejável',
  amount: 'Ge',
}

export const createProductRequest = {
  name: 'Arco Escudo Invejável',
  amount: '3 Gemas da Noite',
}

export const createProductResponse = {
  id: 6,
  name: "Arco Escudo Invejável",
  amount: "3 Gemas da Noite"
}

export const getAllProductsResponse = [
  {
    id: 1,
    name: 'Espada curta',
    amount: "10 peças de ouro",
    orderId: null,
  },
  {
    id: 2,
    name: 'Escudo desnecessariamente grande',
    amount: '20 peças de ouro',
    orderId: 1,
  },
  {
    id: 3,
    name: 'Adaga de Aço Valírico',
    amount: '1 peça de ouro',
    orderId: 2,
  },
  {
    id: 4,
    name: 'Colar de fogo',
    amount: '1 peça de ouro',
    orderId: 2,
  },
  {
    id: 5,
    name: 'Engenhoca aleatória',
    amount: '15 peças de ouro',
    orderId: 3,
  },
]

// Users --------------------------------------------------
export const nonExistentUsernameCreateUserRequest = { 
  classe: "swordsman",
  level: 10,
  password: "SavingPeople"
}

export const nonStringTypeUsenameCreateUserRequest = { 
  username: [],
  classe: "swordsman",
  level: 10,
  password: "SavingPeople"
}

export const usernameLengthNotAllowedCreateUserRequest = { 
  username: "MA",
  classe: "swordsman",
  level: 10,
  password: "SavingPeople"
}

export const nonExistentClasseCreateUserRequest = { 
  username: "MAX",
  level: 10,
  password: "SavingPeople"
}

export const nonStringTypeClasseCreateUserRequest = { 
  username: "MAX",
  classe: [],
  level: 10,
  password: "SavingPeople"
}

export const classeLengthNotAllowedCreateUserRequest = { 
  username: "MAX",
  classe: "sw",
  level: 10,
  password: "SavingPeople"
}

export const nonExistentLevelCreateUserRequest = { 
  username: "MAX",
  classe: "swordsman",
  password: "SavingPeople"
}

export const nonNumberTypeLevelCreateUserRequest = { 
  username: "MAX",
  classe: "swordsman",
  level: 'string',
  password: "SavingPeople"
}

export const levelEqualToZeroCreateUserRequest = { 
  username: "MAX",
  classe: "swordsman",
  level: 0,
  password: "SavingPeople"
}

export const createUserRequest = { 
  username: "MAX",
  classe: "swordsman",
  level: 10,
  password: "SavingPeople"
}

export const createdUser = {
  id: 4,
  username: "MAX",
  classe: "swordsman",
  level: 10,
  password: "SavingPeople"
}

// Orders -----------------------------------------------------
export const getAllOrdersResponse = [
  {
    id: 1,
    userId: 1,
    productsIds: [2]
  },
  {
    id: 3,
    userId: 2,
    productsIds: [5]
  },
  {
    id: 2,
    userId: 3,
    productsIds: [3, 4]
  },
]

// Login ----------------------------------------------------------
export const nonExistentUsernameloginRequest =   {
  password: "1dragaonoceu",
}

export const nonExistentPasswordloginRequest =   {
  username: "reigal",
}

export const invalidUsernameloginRequest =   {
  username: "invalid-username",
  password: "1dragaonoceu"
}

export const invalidPasswordloginRequest =   {
  username: "reigal",
  password: "invalid-password"
}

export const loginRequest =   {
  username: "reigal",
  password: "1dragaonoceu"
}