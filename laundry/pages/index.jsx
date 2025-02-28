import { ReactLenis } from "@studio-freight/react-lenis";
import { useState } from "react";

import Hero from "../components/Hero/index.jsx";
import DesignedToCarry from "../components/DesignedToCarry/index.jsx";
import DryingMode from "../components/DryingMode/index.jsx";
import MoreConvenience from "../components/MoreConvenience/index.jsx";
import Art from "../components/Art/index.jsx";
import Thinq from "../components/Thinq/index.jsx";
import Shop from "../components/Shop/index.jsx";
import StickyNav from "../components/StickyNav/index.jsx";
import CrModule from "../components/CrModule/index.jsx";
/** %%imports%% */

const Home = () => {
  const [lenisPrevent, setLenisPrevent] = useState(null);
  return (
    <ReactLenis root>
      <div className="section wrapper" data-lenis-prevent={lenisPrevent}>
        <StickyNav />
        <Hero />
        <DesignedToCarry />
        <CrModule />
        <Art />
        <DryingMode />
        <MoreConvenience />
        <Thinq />
        <Shop />
        {/** %%components%% */}
      </div>
    </ReactLenis>
  );
};

export default Home;
