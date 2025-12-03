import BaseModel from "./base.model";

export interface CartProductModel extends BaseModel {
  productId: number | string;
  quantity: number;
}
export interface CartModel extends BaseModel {
  customerId: number | string;
  products: CartProductModel[];
}
