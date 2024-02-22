import React, { useRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import html2canvas from 'html2canvas'

const ScreenShot = () => {
  const ref = useRef(null);
  const imgSrc = useRef()
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => {
    console.log(ref.current)
    console.log(window)
    takeScreenshot(window.screen);
  };

  const captureScreenshot = () => {
    html2canvas(document.documentElement).then(canvas => {
      const screenshotDataUrl = canvas.toDataURL();
      console.log(screenshotDataUrl)
      // takeScreenshot(screenshotDataUrl)
      imgSrc.current.src = screenshotDataUrl
      // Use the screenshotDataUrl to display the screenshot in an <img> tag
      // For example:
      // const imageElement = document.getElementById('screenshotImage');
      // imageElement.src = screenshotDataUrl;
    });
  };
  return (
    <div>
      <div>
        <button style={{ marginBottom: "10px" }} onClick={captureScreenshot}>
          Take screenshot
        </button>
      </div>
      <img ref={imgSrc} width={800} src={image} alt={"Screenshot"} />
      <div ref={ref}>
        <h1>use-react-screenshot</h1>
        <p>
          <strong>hook by @vre2h which allows to create screenshots</strong>
        </p>
      </div>
    </div>
  );
};

export default ScreenShot;
