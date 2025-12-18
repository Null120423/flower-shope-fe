import CategoryModel from "@/lib/model/category.model";
import { v4 as uuidv4 } from "uuid";
const categories: CategoryModel[] = [
  {
    id: uuidv4(),
    name: "Tình yêu",
    color: "#FF0000",
  },
  {
    id: uuidv4(),
    name: "Trưng bày",
    color: "#FFA500",
  },
  {
    id: uuidv4(),
    name: "Chưng dịp tết",
    color: "#FFFF00",
  },
  {
    id: uuidv4(),
    name: "Quà tặng ",
    color: "#800080",
  },
  {
    id: uuidv4(),
    name: "Hoa sinh nhật",
    color: "#FFC0CB",
  },
  {
    id: uuidv4(),
    name: "Hoa chia buồn",
    color: "#808080",
  },
  {
    id: uuidv4(),
    name: "Hoa cưới",
    color: "#FFFFFF",
  },
];
export default categories;
