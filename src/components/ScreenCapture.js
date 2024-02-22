import React, { useRef } from 'react';

const ScreenCapture = () => {
  const canvasRef = useRef(null);

  const captureScreen = async () => {
    try {
      // Access user's screen
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: { mediaSource: 'screen' } });
      const videoTrack = stream.getVideoTracks()[0];
      
      // Create a video element and attach the stream
      const videoElement = document.createElement('video');
      videoElement.srcObject = new MediaStream([videoTrack]);
      videoElement.onloadedmetadata = () => {
        // Set the canvas dimensions to match the video stream
        canvasRef.current.width = videoElement.videoWidth;
        canvasRef.current.height = videoElement.videoHeight;
        
        // Draw the video frame onto the canvas
        const ctx = canvasRef.current.getContext('2d');
        ctx.drawImage(videoElement, 0, 0, videoElement.videoWidth, videoElement.videoHeight);
        
        // Stop the video stream
        videoTrack.stop();
        stream.getTracks().forEach(track => track.stop());
        
        // Convert canvas to data URL and download
        const link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvasRef.current.toDataURL();
        link.click();
      };
    } catch (error) {
      console.error('Error capturing screen:', error);
    }
  };

  return (
    <div>
      <button onClick={captureScreen}>Capture Screen</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default ScreenCapture;
