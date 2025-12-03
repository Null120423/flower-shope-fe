import BaseModel from "./base.model";

interface PostModel extends BaseModel {
  thumbnail: string;
  title: string;
  description: string;
  content: string;
  relativePosts?: PostModel[];
}
export default PostModel;
