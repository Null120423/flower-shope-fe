import BestSellerList from "./best-seller-lst";
import Hero from "./hero";
import ListItemSection from "./lst-item";

function HomeView() {
  return (
    <>
      <Hero />
      <ListItemSection />
      <BestSellerList />
    </>
  );
}

export default HomeView;
