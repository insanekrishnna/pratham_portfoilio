import { ImageResponse } from "next/og"

const stack = [
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Node.js", color: "#68a063" },
  { name: "Supabase", color: "#3ecf8e" },
]

export async function GET(request: Request) {
  const avatarUrl = new URL("/facedemo.jpeg", request.url).toString()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "34px",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 86% 8%, rgba(62, 207, 142, 0.12), transparent 31%)",
          color: "#f5f5f5",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 56px",
            border: "2px solid #2b2b2b",
            borderRadius: "28px",
            background: "rgba(8, 8, 8, 0.96)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              alt=""
              src={avatarUrl}
              width="88"
              height="88"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "20px",
                border: "2px solid #353535",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 16px",
                border: "1px solid #2f2f2f",
                borderRadius: "999px",
                color: "#9a9a9a",
                fontSize: "17px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              prathm.me · portfolio
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "52px",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.08,
              }}
            >
              <span>Pratham Yadav</span>
              <span style={{ padding: "0 18px", color: "#555555" }}>|</span>
              <span style={{ color: "#bdbdbd" }}>Design Engineer</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "24px",
                maxWidth: "970px",
                color: "#969696",
                fontSize: "23px",
                lineHeight: 1.48,
              }}
            >
              Pratham Yadav is a Design Engineer with 2+ years of experience,
              known for pixel-perfect execution and an obsessive attention to
              detail.
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "26px",
              }}
            >
              {stack.map((item, index) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: index === stack.length - 1 ? 0 : "10px",
                    padding: "9px 13px",
                    border: "1px solid #303030",
                    borderRadius: "9px",
                    background: "#121212",
                    color: "#c7c7c7",
                    fontSize: "17px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      marginRight: "8px",
                      borderRadius: "999px",
                      background: item.color,
                    }}
                  />
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#777777",
              fontSize: "17px",
            }}
          >
            <div style={{ display: "flex" }}>Based in Indore, India</div>
            <div style={{ display: "flex", color: "#b8b8b8" }}>
              Product · Engineering · Design
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=31536000, immutable",
      },
    },
  )
}
