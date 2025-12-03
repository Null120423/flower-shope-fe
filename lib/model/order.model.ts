import BaseModel from "./base.model";

export interface ProductOrderModel extends BaseModel {
  productId: number | string;
  quantity: number;
  price: number;
}
export interface OrderActionModel {
  isCancellable: boolean;
  isReturnable: boolean;
  /**.... todo  */
  //todo
}
export interface OrderModel extends BaseModel, OrderActionModel {
  customerId: number | string;
  orderDate: string | Date;
  statusName: string;
  statusColor: string;
  totalAmount: number;
  products: ProductOrderModel[];
  deliveryAddress: string;
  note: string;
  planDelivery: string | Date;
  completedDate?: string | Date;
  paymentStatusName: string;
  paymentStatusColor: string;
  deliveryStatusName: string;
  deliveryStatusColor: string;
}
