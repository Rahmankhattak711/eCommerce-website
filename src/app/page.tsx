import Footer from "./components/Footer";
import AllProduct from "./section/AllProduct";
import AskQuestion from "./section/AskQuestion";
import BestChoiceFurniture from "./section/BestChoiceFurniture";
import ElevateEveryRoom from "./section/ElevateEveryRoom";
import Hero from "./section/Hero";
import ShopNowExclusiveDeal from "./section/ShopNowExclusiveDeal";
import SubscribeSection from "./section/SubscribeSection";

export default function Home() {

  return (
    <div>
      <Hero />
      <ShopNowExclusiveDeal/>
      <ElevateEveryRoom/>
      <AllProduct/>
      <BestChoiceFurniture/>
      <SubscribeSection/>
      <AskQuestion/>
      <Footer/>
    </div>
  );
}
