import { homeDataMock } from "@/mock/home-data";
import BestSellerList from "./best-seller-lst";
import Hero from "./hero";
import ListItemSection from "./lst-item";
import PostList from "./post-lst";

function HomeView() {
  const homeData = homeDataMock;
  return (
    <>
      <Hero heros={homeData.heroes} />
      <ListItemSection />
      <BestSellerList />
      <PostList />
    </>
  );
}

export default HomeView;
