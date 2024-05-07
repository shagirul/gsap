import CanvasContainer from "../../component/canvasContainer";
import Tracker from "./Tracker";
import Hero from "./hero";
import Stars from "../../assets/stars.png"
import NavBar from "../../component/navbar";
import AboutUs from "./aboutus";
import NewsLetter from "./newsletter";
import { useState } from "react";


export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const updateLoadingProgress = (progress) => {
    setLoadingProgress(progress);
    // console.log(loadingProgress)
  };

  
  return (
    <div className="relative bg-black  z-0 " >
       {loadingProgress<99&&<text className="fixed z-50  h-screen w-screen bg-black flex justify-center items-center text-white text-2xl md:text-[50px] tracking-[-0.05em] leading-[50px] md:leading-[120px] font-akshar ">{`LOADING.....`}</text>}
   { loadingProgress>99&&  <NavBar/>}
      <div className="h-screen w-screen fixed top-0 z-10 bg-gradient-to-t from-[#73737320]   to-transparent   "></div>
      <img className="h-screen w-screen fixed top-0 -z-20 min-w-7xl min-h-screen" src={Stars}></img>
      <div className="h-screen w-screen fixed top-0 -z-10">
        <CanvasContainer onUpdateProgress={updateLoadingProgress} />
      </div>
      <Hero/>
      <Tracker/>
      <AboutUs/>
      <NewsLetter/>
     
    </div>
  );
}
