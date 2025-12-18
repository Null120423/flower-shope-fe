import BaseModel from "./base.model";
import ProductModel from "./product.model";

export interface CartProductModel extends BaseModel {
  productId: string;
  quantity: number;
  product: ProductModel;
}
export interface CartModel extends BaseModel {
  customerId: string;
  products: CartProductModel[];
}
