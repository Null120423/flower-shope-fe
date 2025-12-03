import BaseModel from "./base.model";

interface ReviewModel extends BaseModel {
  customerName: string;
  rating: number;
  comment: string;
  commentDate: string | Date;
}
export default ReviewModel;
