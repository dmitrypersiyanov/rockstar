import Intro from "@/components/Intro";
import Story from "@/components/Story";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Leadership from "@/components/Leadership";
import OilPrice from "@/components/OilPrice";

const Home = () => {
  return (
    <div className="rounded-3xl">
      <Intro />
      <About />
      <Mission />
      <Story />
      <Leadership />
      <OilPrice />
    </div>
  );
};

export default Home;
