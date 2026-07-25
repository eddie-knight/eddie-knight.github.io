import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_SPEED = 0.5; // px per animation frame
const RESUME_DELAY = 2500; // ms of inactivity before auto-scroll resumes
const MAX_WHEEL_DELTA = 15; // caps manual scrubbing so it stays near auto speed

/**
 * Drives a horizontally auto-scrolling rail. The content is expected to be
 * repeated three times so the reset at one-third of the scroll width is
 * invisible. Auto-scroll pauses while the visitor is interacting and stays off
 * entirely when the OS requests reduced motion, in which case the rail behaves
 * as a plain scroll container.
 */
export const useAutoScroll = <T extends HTMLElement>() => {
  const containerRef = useRef<T>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isPausedRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(query.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const pause = useCallback(() => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, RESUME_DELAY);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    const step = () => {
      if (!isPausedRef.current) {
        const oneSetWidth = container.scrollWidth / 3;
        const next = container.scrollLeft + SCROLL_SPEED;
        container.scrollLeft = next >= oneSetWidth ? next - oneSetWidth : next;
      }
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    const onWheel = (event: WheelEvent) => {
      const deltaX = event.deltaX || (event.shiftKey ? event.deltaY : 0);
      if (Math.abs(deltaX) < 0.1) return;

      pause();
      event.preventDefault();
      event.stopPropagation();

      const capped =
        Math.sign(deltaX) * Math.min(Math.abs(deltaX), MAX_WHEEL_DELTA);
      const oneSetWidth = container.scrollWidth / 3;
      const next = container.scrollLeft + capped;

      container.scrollLeft =
        next >= oneSetWidth ? next - oneSetWidth : Math.max(next, 0);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [pause, prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return {
    containerRef,
    /** Spread onto the scroll container to pause auto-scroll on interaction. */
    pauseHandlers: {
      onMouseDown: pause,
      onTouchStart: pause,
      onTouchMove: pause,
      onFocus: pause
    }
  };
};
