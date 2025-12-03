export interface HeroModel {
  img: string;
  name: string;
  descriptionLeft: string;
  descriptionRight: string;
  tagRight: string;
  tagLeft: string;
  productId: string | number;
}
interface HomeDataModel {
  heroes: HeroModel[];
}
export default HomeDataModel;
