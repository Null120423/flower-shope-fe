import BaseModel from "./base.model";
import CategoryModel from "./category.model";
import PostModel from "./post.model";
import ReviewModel from "./review.model";

interface ProductModel extends BaseModel {
  id: number;
  name: string;
  description: string;
  basePrice: number;
  salePrice: number;
  thumbnail: string;
  categoryId: number;
  category?: CategoryModel;
  relativePosts?: PostModel[];
  imgCategories?: string[];
  totalReviews?: number;
  reviews?: ReviewModel[];
  averageRating?: number;
  statusName: string;
  statusCode: string;
  statusColor: string;
  badgeName: string;
  badgeColor: string;
  badgeCode: string;
}
export default ProductModel;
