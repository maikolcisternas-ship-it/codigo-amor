import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";

export default function FirmaCanvas({ onSave }) {

  const sigRef = useRef();

  const limpiar = () => {
    sigRef.current.clear();
  };

  const guardar = () => {
  if (!sigRef.current || sigRef.current.isEmpty()) return;

  const dataURL = sigRef.current
    .getCanvas()
    .toDataURL("image/png");

  onSave(dataURL);
};

  return (
    <div className="firma-container">

      <p className="firma-title">Dibuja tu firma aquí ✍️</p>

      <SignatureCanvas
  ref={sigRef}
  canvasProps={{
    className: "firma-canvas"
  }}
  backgroundColor="rgba(0,0,0,0)"
  penColor="#f5f5f5"
/>

      <div className="firma-actions">

        <button onClick={limpiar}>
          Limpiar
        </button>

        <button onClick={guardar}>
          Guardar firma
        </button>

      </div>

    </div>
  );
}