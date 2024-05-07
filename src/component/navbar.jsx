import logo from "../assets/geoviewlogo.png";
export default function NavBar() {
  return (
    <div className="w-screen md:h-24 h-16 flex justify-center items-center fixed top-0 px-[5%] border-b-[0.5px] border-gray-800 z-50  backdrop-blur-md bg-white bg-opacity-[1%] ">
      <img
        src={logo}
        className="absolute left-[5%] aspect-auto w-28 md:w-40  z-30  -my-14 -mx-3 py-5 "
      ></img>
      <div className=" justify-between text-white  text-xl w-full max-w-xs font-light hidden md:flex">
        <text>Home</text>
        <text>News</text>
        <text>Trackers</text>
      </div>
    </div>
  );
}
