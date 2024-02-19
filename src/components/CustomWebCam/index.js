import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const CustomWebCam = () => {
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef])

  const retake = () => {
    setImgSrc(null)
  }
  return (
    <div className="container">
      {
        imgSrc ? (
          <img src={imgSrc} alt="webcam" />
        ) :
        (
          <Webcam height={600} width={600}/>
        )
      }
      <div className="btn-container" >
      <button onClick={capture} >Capture photo</button>
      </div>
    </div>
  )
}

export default CustomWebCam