export default interface IProduct {
  id?: number,
  name: string,
  amount: string,
  orderId: number,
}

export interface IProductUpdate {
  name?: string,
  amount?: string,
  orderId?: number,
}