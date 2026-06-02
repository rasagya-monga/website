// Framer Code Component: Service Card with hover effect
// Usage: Use on the home page or services landing page for each service offering.

import { addPropertyControls, ControlType } from "framer"
import { useState } from "react"

interface Props {
    title: string
    description: string
    linkText: string
    linkHref: string
    iconEmoji: string
    accentColor: string
    style?: React.CSSProperties
}

export default function ServiceCard({
    title = "Pigment Implementation",
    description = "Deploy Pigment the right way — with thoughtful dimension design, sparsity management, and access controls built for scale.",
    linkText = "Learn More →",
    linkHref = "/services/pigment-implementation",
    iconEmoji = "⚙️",
    accentColor = "#2563EB",
    style,
}: Props) {
    const [hovered, setHovered] = useState(false)

    return (
        <a
            href={linkHref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                padding: 32,
                borderRadius: 16,
                backgroundColor: hovered ? "#F8FAFC" : "#FFFFFF",
                border: `1px solid ${hovered ? accentColor : "#E2E8F0"}`,
                textDecoration: "none",
                transition: "all 0.25s ease",
                transform: hovered ? "translateY(-4px)" : "none",
                boxShadow: hovered
                    ? "0 12px 40px rgba(0, 0, 0, 0.08)"
                    : "0 1px 3px rgba(0, 0, 0, 0.04)",
                cursor: "pointer",
                ...style,
            }}
        >
            <span style={{ fontSize: 36 }}>{iconEmoji}</span>
            <h3
                style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#1E293B",
                    fontFamily: "Inter, sans-serif",
                    margin: 0,
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: 16,
                    color: "#64748B",
                    fontFamily: "Inter, sans-serif",
                    margin: 0,
                    lineHeight: 1.6,
                }}
            >
                {description}
            </p>
            <span
                style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: accentColor,
                    fontFamily: "Inter, sans-serif",
                    marginTop: "auto",
                }}
            >
                {linkText}
            </span>
        </a>
    )
}

addPropertyControls(ServiceCard, {
    title: { type: ControlType.String, title: "Title", defaultValue: "Pigment Implementation" },
    description: { type: ControlType.String, title: "Description", defaultValue: "Deploy Pigment the right way." },
    linkText: { type: ControlType.String, title: "Link Text", defaultValue: "Learn More →" },
    linkHref: { type: ControlType.String, title: "Link URL", defaultValue: "/services/pigment-implementation" },
    iconEmoji: { type: ControlType.String, title: "Icon Emoji", defaultValue: "⚙️" },
    accentColor: { type: ControlType.Color, title: "Accent Color", defaultValue: "#2563EB" },
})
