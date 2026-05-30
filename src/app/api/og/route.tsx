import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";

export async function GET() {
  // Read the avatar from public/
  const avatarData = await readFile(join(process.cwd(), "public", "avatar.jpg"));
  const avatarBase64 = `data:image/jpeg;base64,${avatarData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200",
          height: "630",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050507",
          position: "relative",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at center, rgba(26,61,40,0.25) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top jade accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #4ade6e, transparent)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Avatar */}
          <img
            src={avatarBase64}
            width={160}
            height={160}
            style={{
              borderRadius: "50%",
              border: "3px solid rgba(74,222,110,0.4)",
              objectFit: "cover",
            }}
          />

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#4ade6e",
              letterSpacing: "0.1em",
              display: "flex",
            }}
          >
            IM_SAVVY
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "24px",
              color: "#5a5a6a",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Web3 Operator & Community Architect
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize: "18px",
              color: "rgba(74,222,110,0.5)",
              letterSpacing: "0.1em",
              display: "flex",
              marginTop: "8px",
            }}
          >
            savvychad.com
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #4ade6e, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
