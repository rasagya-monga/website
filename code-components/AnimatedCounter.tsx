// Framer Code Component: Animated Counter
// Usage: Add as a code component in Framer. Displays a number that counts up when scrolled into view.
// Great for stats sections like "200+ Users" or "50+ Implementations"

import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef, useState } from "react"

interface Props {
    targetNumber: number
    suffix: string
    prefix: string
    label: string
    duration: number
    fontSize: number
    labelFontSize: number
    color: string
    labelColor: string
    style?: React.CSSProperties
}

export default function AnimatedCounter({
    targetNumber = 200,
    suffix = "+",
    prefix = "",
    label = "Users Onboarded",
    duration = 2000,
    fontSize = 56,
    labelFontSize = 16,
    color = "#2563EB",
    labelColor = "#64748B",
    style,
}: Props) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    const startTime = performance.now()
                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.floor(eased * targetNumber))
                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        }
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [targetNumber, duration, hasAnimated])

    return (
        <div
            ref={ref}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                ...style,
            }}
        >
            <span
                style={{
                    fontSize,
                    fontWeight: 700,
                    color,
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.1,
                }}
            >
                {prefix}
                {count}
                {suffix}
            </span>
            <span
                style={{
                    fontSize: labelFontSize,
                    color: labelColor,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                }}
            >
                {label}
            </span>
        </div>
    )
}

addPropertyControls(AnimatedCounter, {
    targetNumber: { type: ControlType.Number, title: "Number", defaultValue: 200, min: 0, max: 10000 },
    suffix: { type: ControlType.String, title: "Suffix", defaultValue: "+" },
    prefix: { type: ControlType.String, title: "Prefix", defaultValue: "" },
    label: { type: ControlType.String, title: "Label", defaultValue: "Users Onboarded" },
    duration: { type: ControlType.Number, title: "Duration (ms)", defaultValue: 2000, min: 500, max: 5000 },
    fontSize: { type: ControlType.Number, title: "Number Size", defaultValue: 56, min: 20, max: 120 },
    labelFontSize: { type: ControlType.Number, title: "Label Size", defaultValue: 16, min: 10, max: 32 },
    color: { type: ControlType.Color, title: "Number Color", defaultValue: "#2563EB" },
    labelColor: { type: ControlType.Color, title: "Label Color", defaultValue: "#64748B" },
})
