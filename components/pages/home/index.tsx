import { homeDataMock } from "@/mock/home-data";
import AboutSection from "./about";
import Hero from "./hero";
import ListItemSection from "./lst-item";
import PostList from "./post-lst";

function HomeView() {
  const homeData = homeDataMock;
  return (
    <>
      <Hero heros={homeData.heroes} />
      <ListItemSection />
      <AboutSection />
      <PostList />
    </>
  );
}

export default HomeView;
