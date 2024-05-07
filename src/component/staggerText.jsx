import gsap from "gsap";

export default function Staggertext() {
  gsap.fromTo(
    "#text-box span",
    {
      y: 50,
    },
    {
      y: 0,
      stagger: 0.05,
      duration: 2,
      ease: "elastic(0.5)",
    }
  );
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "40px",
        fontWeight: "bolder",
        letterSpacing: "1em",
        // flexdirection: "column",
      }}
      // className="hero"
    >
      <div
        style={{
        //   borderWidth: "1px",
          padding: "0px 20px",
          overflow: "hidden",
          display: "flex",
        }}
        id="text-box"
      >
        {["U", "N", "F", "O","L", "D", "I", "N" ,"G"].map((letter) => {
          return <span style={{ letterSpacing: "0em" }}>{letter}</span>;
        })}
      </div>
      
  
    </div>
  );
}
