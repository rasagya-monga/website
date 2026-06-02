"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-.,!? ";

interface FlipCellProps {
  targetChar: string;
  delay: number;
}

function FlipCell({ targetChar, delay }: FlipCellProps) {
  const [currentChar, setCurrentChar] = useState(" ");
  const [isFlipping, setIsFlipping] = useState(false);
  const [settled, setSettled] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startFlipping = useCallback(() => {
    setIsFlipping(true);
    setSettled(false);

    const target = targetChar.toUpperCase();
    let ticks = 0;
    const totalTicks = 8 + Math.floor(Math.random() * 6);

    intervalRef.current = setInterval(() => {
      ticks++;
      if (ticks >= totalTicks) {
        setCurrentChar(target);
        setIsFlipping(false);
        setSettled(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }
      setCurrentChar(CHARS[Math.floor(Math.random() * CHARS.length)]);
    }, 50);
  }, [targetChar]);

  useEffect(() => {
    const timer = setTimeout(startFlipping, delay);
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [delay, startFlipping]);

  const isSpace = targetChar === " ";

  return (
    <div
      className={`relative w-[1.6em] h-[2.2em] rounded-md overflow-hidden ${
        isSpace ? "bg-transparent" : "bg-[#1a1a2e] border border-white/[0.06]"
      }`}
    >
      {!isSpace && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-[1em] font-mono font-bold text-white/90 select-none"
              animate={
                isFlipping
                  ? { rotateX: [0, -90, 0], opacity: [1, 0.4, 1] }
                  : settled
                    ? { rotateX: 0, opacity: 1 }
                    : {}
              }
              transition={{ duration: 0.05, ease: "linear" }}
            >
              {currentChar}
            </motion.span>
          </div>
          <div className="absolute left-0 right-0 top-1/2 h-px bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
        </>
      )}
    </div>
  );
}

interface FlipBoardProps {
  words: string[];
  className?: string;
  cycleDuration?: number;
}

export function FlipBoard({
  words,
  className = "",
  cycleDuration = 3000,
}: FlipBoardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const maxLen = Math.max(...words.map((w) => w.length));
  const currentWord = words[currentIndex].toUpperCase().padEnd(maxLen);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setKey((prev) => prev + 1);
    }, cycleDuration);

    return () => clearInterval(interval);
  }, [isInView, words, cycleDuration]);

  return (
    <div ref={ref} className={`inline-flex gap-[3px] ${className}`}>
      {currentWord.split("").map((char, i) => (
        <FlipCell key={`${key}-${i}`} targetChar={char} delay={i * 40} />
      ))}
    </div>
  );
}

interface FlipBoardRowProps {
  lines: string[];
  className?: string;
  cycleDuration?: number;
}

export function FlipBoardRow({
  lines,
  className = "",
  cycleDuration = 3000,
}: FlipBoardRowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const maxLen = Math.max(...lines.map((l) => l.length));
  const currentLine = lines[currentIndex].toUpperCase().padEnd(maxLen);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lines.length);
      setKey((prev) => prev + 1);
    }, cycleDuration);

    return () => clearInterval(interval);
  }, [isInView, lines, cycleDuration]);

  return (
    <div ref={ref} className={`flex flex-wrap justify-center gap-[3px] ${className}`}>
      {currentLine.split("").map((char, i) => (
        <FlipCell key={`${key}-${i}`} targetChar={char} delay={i * 30} />
      ))}
    </div>
  );
}
