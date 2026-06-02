// Framer Code Component: Calendly / Cal.com Embed
// Usage: Add to the "Book a Call" page. Paste your scheduling URL in the property controls.

import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef } from "react"

interface Props {
    url: string
    height: number
    style?: React.CSSProperties
}

export default function CalendlyEmbed({
    url = "https://calendly.com/your-link",
    height = 700,
    style,
}: Props) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const isCalendly = url.includes("calendly.com")

        if (isCalendly) {
            const script = document.createElement("script")
            script.src = "https://assets.calendly.com/assets/external/widget.js"
            script.async = true
            document.head.appendChild(script)
            return () => {
                document.head.removeChild(script)
            }
        }
    }, [url])

    const isCalendly = url.includes("calendly.com")

    if (isCalendly) {
        return (
            <div
                ref={containerRef}
                className="calendly-inline-widget"
                data-url={url}
                style={{
                    minWidth: 320,
                    width: "100%",
                    height,
                    ...style,
                }}
            />
        )
    }

    return (
        <iframe
            src={url}
            style={{
                width: "100%",
                height,
                border: "none",
                borderRadius: 12,
                ...style,
            }}
            title="Schedule a call"
        />
    )
}

addPropertyControls(CalendlyEmbed, {
    url: { type: ControlType.String, title: "Scheduling URL", defaultValue: "https://calendly.com/your-link" },
    height: { type: ControlType.Number, title: "Height (px)", defaultValue: 700, min: 400, max: 1200 },
})
