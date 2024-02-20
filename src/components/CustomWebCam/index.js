import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const CustomWebCam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("/logo192.png");
  const [mirrored, setMirrored] = useState(false)
  const capture = useCallback(() => {
    console.log(webcamRef)
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    console.log(imageSrc)
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };
  return (
    <div className="container">
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={600} width={600} mirrored={mirrored} screenshotFormat="image/jpeg" screenshotQuality={0.8} ref={webcamRef} />
      )}
      <div className="controls" >
        <div>
          <input
            type="checkbox"
            checked={mirrored}
            onChange={(e) => setMirrored(e.target.checked)}
          />
        </div>
      </div>
      <div className="btn-container">
        <button onClick={capture}>Capture photo</button>
      </div>
    </div>
  );
};

export default CustomWebCam;
