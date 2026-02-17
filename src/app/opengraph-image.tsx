import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PinPal - Bowling League Management Made Simple";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #8B1538 0%, #5C0E25 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <img
          src="https://pinpal.app/images/pinpal_logo.png"
          width={120}
          height={120}
          style={{ borderRadius: 24, marginBottom: 32 }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-2px",
            marginBottom: 8,
          }}
        >
          PinPal
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#D4A537",
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          Bowling League Management Made Simple
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Track scores, manage leagues, and calculate standings with ease.
        </div>
      </div>
    ),
    { ...size }
  );
}
