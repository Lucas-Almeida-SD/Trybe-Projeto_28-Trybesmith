import IOrder from '../interfaces/orders.interface';

export default (orders: IOrder[]) => {
  const newOrders: IOrder[] = [];

  for (let index = 0; index < orders.length; index += 1) {
    if (!newOrders.some((order) => order.id === orders[index].id)) { 
      const filterOrders = orders.filter((order) => order.id === orders[index].id);
  
      const productsIds = filterOrders.map((order) => order.productsIds) as number[];

      newOrders.push({ ...orders[index], productsIds });
    }
  }

  return newOrders;
};