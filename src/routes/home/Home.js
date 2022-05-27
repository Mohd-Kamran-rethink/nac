import Entertainment from "../../components/Entertainment/Entertainment";
import NacBallot from "../../components/NacBallot/NacBallot";
import NacInvestment from "../../components/NacInvestment/NacInvestment";
import NacLive from "../../components/NacLive/NacLive";
import NacNetwork from "../../components/NacNetwork/NacNetwork";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <Services></Services>
      <NacNetwork></NacNetwork>
      <NacLive></NacLive>
      <NacInvestment></NacInvestment>
      <NacBallot></NacBallot>
      <Entertainment></Entertainment>
    </>
  );
};

export default Home;
