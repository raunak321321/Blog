import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import SignupForm from "./SignupForm";

export default function Signup() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="signup">
      {width <= 650 ? (
        <div className="center-panel">
          <SignupForm />
        </div>
      ) : (
        <>
          <div className="left-panel" style={{ width: "40%", display: "inline-block" }}>
            <SignupForm />
          </div>
          <div className="right-panel">
            <h2>
              #1 Bloggin website for everyone around the globe. Totally free and
              easy to use.
            </h2>
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json"
            />
          </div>
        </>
      )
      }
    </div >
  );
}
