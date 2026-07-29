import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aritana Brito — BI • Dados • IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              background: "#2563EB",
              color: "white",
              fontSize: 14,
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: 99,
              width: "fit-content",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            BI · Dados · IA
          </div>
          <div style={{ fontSize: 72, fontWeight: 900, color: "#0f172a", lineHeight: 1.05 }}>
            Aritana
            <br />
            <span style={{ color: "#2563EB" }}>Brito</span>
          </div>
          <div style={{ fontSize: 22, color: "#64748b", fontWeight: 400 }}>
            Fundadora da IK Analytics · 15+ anos
          </div>
          <div style={{ fontSize: 18, color: "#94a3b8" }}>
            aritana.ikanalytics.com.br
          </div>
        </div>

        {/* Right: Avatar */}
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #dbeafe 0%, #f1f5f9 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "4px solid white",
            boxShadow: "0 20px 60px rgba(37,99,235,0.15)",
          }}
        >
          <div style={{ fontSize: 80, fontWeight: 900, color: "#bfdbfe" }}>AB</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
