import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const CustomWebCam = () => {
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef])
  return (
    <div className="container">
      <Webcam height={600} width={600}/>
    </div>
  )
}

export default CustomWebCam