import React from "react";
import animationData from "./animation.json";
import Lottie from "react-lottie";
const LottieComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Lottie animation JSON
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </div>
  );
};

export default LottieComponent;
