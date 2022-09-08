import "./App.css";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div>
      <div
        style={{ height: "100vh", width: "100vw", backgroundColor: "yellow" }}
      >
        test1
      </div>
      <div style={{ height: "100vh", width: "100vw", backgroundColor: "blue" }}>
        test2
      </div>
      <Tween
        to={{
          x: "300px",
          opacity: 1,
          scrollTrigger: {
            trigger: ".square",
            start: "-200px center",
            end: "200px center",
            scrub: 0.5,
            markers: true,
          },
        }}
      >
        <div
          className="square"
          style={{
            width: "100px",
            height: "100px",
            background: "#ccc",
            opacity: 0,
          }}
        />
      </Tween>
      <div
        style={{ height: "100vh", width: "100vw", backgroundColor: "yellow" }}
      >
        test1
      </div>
    </div>
  );
}

export default App;
