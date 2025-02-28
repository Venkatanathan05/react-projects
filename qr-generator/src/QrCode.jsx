import { useState } from "react";

const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  const [qrSize, setQrSize] = useState("");

  function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (error) {
      console.error("Generating went wrong!", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Downloading went wrong!", error));
  }
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} alt="qrcode" className="qr-code-image" />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input
          type="text"
          id="dataInput"
          placeholder="Enter data for QR code"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />
        <label htmlFor="sizeInput" className="input-label">
          Image size(e.g. width):
        </label>
        <input
          type="text"
          id="sizeInput"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
          placeholder="Enter image size"
        />
        <button
          className="generate-button"
          disabled={loading}
          onClick={generateQR}
        >
          Generate QR code
        </button>
        <button className="download-button" onClick={downloadQR}>
          Download QR code
        </button>
      </div>
    </div>
  );
};

export default QrCode;
