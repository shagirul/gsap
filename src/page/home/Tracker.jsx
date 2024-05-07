import { useLayoutEffect } from "react";
import conflictIcon from "../../assets/conflict.png";
import militaryIcon from "../../assets/military.png";
import protestIcon from "../../assets/protest.png"
import { gsap } from "gsap";

export default function Tracker() {
  const tl = gsap.timeline();

 useLayoutEffect(() => {
tl.fromTo(
  "#trackers .tile",
  {
    x: "100vw",
    scrollTrigger: {
      trigger: ".tracker-section",
   

      scrub: true,
      // markers: true,
      immediateRender: false,
    },
  },
  {
    x: 0,
    stagger: { each: 1 },
    duration: 6,
    ease: "circ",
    scrollTrigger: {
      trigger: ".tracker-section",

 
      end: "top end",
      scrub: true,
      // markers: true,
      immediateRender: false,
    },
  }
).to("#trackers h1",{
x:700,
scrollTrigger: {
trigger: ".tracker-section",
// start: "top bottom",
// end: "top top",
scrub: true,
// markers:true,
immediateRender: false,
},
})
 

 }, [])
  const trackers = [
    {
      icon: conflictIcon,
      heading: "Conflict Tracker",
      subheading:
        "Here we can have some sub-heading for now i am just using this random text",
    },  {
        icon: protestIcon,
        heading: "Protest Tracker",
        subheading:
          "Here we can have some sub-heading for now i am just using this random text",
      },
    {
      icon: militaryIcon,
      heading: "Military Tracker",
      subheading:
        "Here we can have some sub-heading for now i am just using this random text",
    }
  
  ];
  return (
    <section id="trackers" className=" tracker-section h-screen w-screen overflow-x-hidden text-white flex flex-col justify-center  items-center px-[5%]  gap-[5%] ">
      {/* <h1 className="font-semibold text-2xl font-akshar tracking-widest md:text-4xl md:mb-[5%] absolute left-[100%]">
        Track The Global Events
      </h1> */}
{trackers.map((tile,i)=>{
    return     <div  key={i} className="tile  h-fit py-3 px-3 w-full md:w-fit border-[0.3px] border-[#3d3d3d]  rounded-xl flex justify-center items-center md:ml-[50%]">
    <img className="md:w-[5vw] w-[20vw] " src={tile.icon}></img>
    <div className="flex flex-col items-start justify-center">
      <h2 className="text-xl md:2xl">{tile.heading}</h2>
      <p className="text-xs md:text-sm">
       {tile.subheading}
      </p>
    </div>
  </div>
})}

    </section>
  );
}
