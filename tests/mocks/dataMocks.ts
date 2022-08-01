// Products -------------------------------------------------
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