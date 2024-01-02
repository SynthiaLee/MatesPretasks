import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import okinawa from "./pdf/okinawa.pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function SecondTest() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "calc(100vh - 6rem)",
        }}
      >
        <Viewer fileUrl={okinawa} theme={{ theme: "dark" }} />
      </div>
    </Worker>
  );
}
