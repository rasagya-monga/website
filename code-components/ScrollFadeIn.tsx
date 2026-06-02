// Framer Code Component: Scroll Fade-In Wrapper
// Usage: Wrap any Framer layer with this component to add fade-in-on-scroll animation.
// Supports fade directions: up, down, left, right.

import { addPropertyControls, ControlType } from "framer"
import { useEffect, useRef, useState } from "react"

interface Props {
    children: React.ReactNode
    direction: "up" | "down" | "left" | "right"
    distance: number
    duration: number
    delay: number
    threshold: number
    style?: React.CSSProperties
}

export default function ScrollFadeIn({
    children,
    direction = "up",
    distance = 40,
    duration = 600,
    delay = 0,
    threshold = 0.15,
    style,
}: Props) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])

    const translateMap = {
        up: `translateY(${distance}px)`,
        down: `translateY(-${distance}px)`,
        left: `translateX(${distance}px)`,
        right: `translateX(-${distance}px)`,
    }

    return (
        <div
            ref={ref}
            style={{
                width: "100%",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : translateMap[direction],
                transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
                ...style,
            }}
        >
            {children}
        </div>
    )
}

addPropertyControls(ScrollFadeIn, {
    children: { type: ControlType.ComponentInstance, title: "Content" },
    direction: {
        type: ControlType.Enum,
        title: "Direction",
        options: ["up", "down", "left", "right"],
        optionTitles: ["Up", "Down", "Left", "Right"],
        defaultValue: "up",
    },
    distance: { type: ControlType.Number, title: "Distance (px)", defaultValue: 40, min: 10, max: 200 },
    duration: { type: ControlType.Number, title: "Duration (ms)", defaultValue: 600, min: 200, max: 2000 },
    delay: { type: ControlType.Number, title: "Delay (ms)", defaultValue: 0, min: 0, max: 1000 },
    threshold: { type: ControlType.Number, title: "Threshold", defaultValue: 0.15, min: 0, max: 1, step: 0.05 },
})
