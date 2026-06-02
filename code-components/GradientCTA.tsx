// Framer Code Component: Gradient CTA Banner
// Usage: Full-width call-to-action section with gradient background.

import { addPropertyControls, ControlType } from "framer"

interface Props {
    headline: string
    body: string
    buttonText: string
    buttonLink: string
    secondaryText: string
    secondaryLink: string
    gradientFrom: string
    gradientTo: string
    style?: React.CSSProperties
}

export default function GradientCTA({
    headline = "Ready to fix your planning?",
    body = "Book a free discovery call and we'll map out how Pigment can work for your organization.",
    buttonText = "Book a Call",
    buttonLink = "/book-a-call",
    secondaryText = "Or email us at info@amventconsulting.com",
    secondaryLink = "mailto:info@amventconsulting.com",
    gradientFrom = "#0A1628",
    gradientTo = "#1E3A5F",
    style,
}: Props) {
    return (
        <section
            style={{
                width: "100%",
                background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                padding: "80px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 24,
                ...style,
            }}
        >
            <h2
                style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    fontFamily: "Inter, sans-serif",
                    margin: 0,
                    maxWidth: 600,
                    lineHeight: 1.2,
                }}
            >
                {headline}
            </h2>
            <p
                style={{
                    fontSize: "clamp(16px, 2vw, 20px)",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: "Inter, sans-serif",
                    margin: 0,
                    maxWidth: 520,
                    lineHeight: 1.6,
                }}
            >
                {body}
            </p>
            <a
                href={buttonLink}
                style={{
                    display: "inline-block",
                    padding: "16px 40px",
                    backgroundColor: "#2563EB",
                    color: "#FFFFFF",
                    fontSize: 18,
                    fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
                    borderRadius: 8,
                    textDecoration: "none",
                    transition: "background-color 0.2s ease, transform 0.2s ease",
                    cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1D4ED8"
                    e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563EB"
                    e.currentTarget.style.transform = "none"
                }}
            >
                {buttonText}
            </a>
            {secondaryText && (
                <a
                    href={secondaryLink}
                    style={{
                        fontSize: 14,
                        color: "rgba(255, 255, 255, 0.6)",
                        fontFamily: "Inter, sans-serif",
                        textDecoration: "none",
                    }}
                >
                    {secondaryText}
                </a>
            )}
        </section>
    )
}

addPropertyControls(GradientCTA, {
    headline: { type: ControlType.String, title: "Headline", defaultValue: "Ready to fix your planning?" },
    body: { type: ControlType.String, title: "Body", defaultValue: "Book a free discovery call and we'll map out how Pigment can work for your organization." },
    buttonText: { type: ControlType.String, title: "Button Text", defaultValue: "Book a Call" },
    buttonLink: { type: ControlType.String, title: "Button Link", defaultValue: "/book-a-call" },
    secondaryText: { type: ControlType.String, title: "Secondary Text", defaultValue: "Or email us at info@amventconsulting.com" },
    secondaryLink: { type: ControlType.String, title: "Secondary Link", defaultValue: "mailto:info@amventconsulting.com" },
    gradientFrom: { type: ControlType.Color, title: "Gradient From", defaultValue: "#0A1628" },
    gradientTo: { type: ControlType.Color, title: "Gradient To", defaultValue: "#1E3A5F" },
})
