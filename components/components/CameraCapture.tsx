import { useState, useRef, useEffect } from "react";

const CameraCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        setHasPermission(true);
      } catch (error) {
        console.error("Camera access denied or unavailable.");
      }
    })();
  }, []);

  const handleCapture = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageData = canvasRef.current.toDataURL("image/png");
    onCapture(imageData);
  };

  return (
    <div className="flex flex-col items-center">
      {hasPermission ? (
        <div className="relative w-72 h-72">
          <video ref={videoRef} autoPlay playsInline className="w-full h-full rounded-full object-cover" />
          <canvas ref={canvasRef} width="300" height="300" className="hidden" />
          <Button onClick={handleCapture} className="absolute bottom-4 bg-black text-white rounded-full px-4 py-2">
            Capture Photo
          </Button>
        </div>
      ) : (
        <p>Camera permission is required to take a photo.</p>
      )}
    </div>
  );
};

export default CameraCapture;
