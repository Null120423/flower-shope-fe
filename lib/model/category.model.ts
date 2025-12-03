import BaseModel from "./base.model";

interface CategoryModel extends BaseModel {
  name: string;
  color: string;
}
export default CategoryModel;
