import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export async function GET() {
  const bgImage = readFileSync(join(process.cwd(), "public", "gas-ring-hero.jpg"));
  const bgBase64 = `data:image/jpeg;base64,${bgImage.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={bgBase64}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(13, 27, 42, 0.68)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
            padding: "0 90px",
            gap: "0px",
          }}
        >
          <div
            style={{
              fontSize: "74px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "10px",
              letterSpacing: "-1px",
            }}
          >
            Steve Barraclough Heating
          </div>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 700,
              color: "#ffce00",
              lineHeight: 1.2,
              marginBottom: "18px",
            }}
          >
            Gas Safe Engineers
          </div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.3,
            }}
          >
            in Pontefract and West Yorkshire
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
