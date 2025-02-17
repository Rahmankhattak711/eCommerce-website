import AllProduct from "./section/AllProduct";
import ElevateEveryRoom from "./section/ElevateEveryRoom";
import Hero from "./section/Hero";
import ShopNowExclusiveDeal from "./section/ShopNowExclusiveDeal";

export default function Home() {

  return (
    <div>
      <Hero />
      <ShopNowExclusiveDeal/>
      <ElevateEveryRoom/>
      <AllProduct/>
    </div>
  );
}
