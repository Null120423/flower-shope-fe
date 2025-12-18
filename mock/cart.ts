import { CartModel } from "@/lib/model/cart.model";
import { v4 as uuidv4 } from "uuid";
import products from "./products";
const carts: CartModel = {
  id: uuidv4(),
  customerId: uuidv4(),
  products: products.slice(0, 3).map((item, index) => ({
    id: uuidv4(),
    productId: item.id,
    quantity: 1,
    product: item,
  })),
};

export default carts;
