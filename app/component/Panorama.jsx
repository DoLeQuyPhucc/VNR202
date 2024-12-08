import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";

const Tour3D = () => {
  const handleClick = () => {
    console.log(getConfig());
  };

  const config = {
    autoLoad: true,
    autoRotate: -2,
    showControls: true,
    showZoomCtrl: true,
    showFullscreenCtrl: true,
    preview: "/anh-bai-viet-panorama.jpg",
    orientationOnByDefault: true,
    compass: true,
  };

  return (
    <div>
      <ReactPannellum
        id="1"
        sceneId="firstScene"
        imageSource="/anh-bai-viet-panorama.jpg"
        config={config}
        style={{ width: "100%", height: "400px" }}
      />
      <div onClick={handleClick}></div>
    </div>
  );
};

export default Tour3D;
