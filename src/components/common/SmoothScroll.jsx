import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const SMOOTH_SCROLL_ROUTES = new Set([
  "/",
  "/about",
  "/achievements",
  "/posts",
  "/support",
]);

const SmoothScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!SMOOTH_SCROLL_ROUTES.has(pathname)) return undefined;

    const isHome = pathname === "/";
    let lenis = null;
    let unsubscribe = null;
    let raf = null;
    let frame = null;
    let timeout = null;

    const startLenis = () => {
      if (lenis) return;

      lenis = new Lenis({
        autoRaf: false,
        // The Home hero owns the first scroll gesture. Once it expands, use a
        // slower Lenis profile for the content blocks beneath it.
        duration: isHome ? 1.55 : 1.15,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: isHome ? 0.95 : 1.05,
        wheelMultiplier: isHome ? 0.8 : 0.95,
        gestureOrientation: "vertical",
      });

      unsubscribe = lenis.on("scroll", ScrollTrigger.update);
      raf = (time) => lenis?.raf(time * 1000);

      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      const refresh = () => ScrollTrigger.refresh();
      frame = requestAnimationFrame(refresh);
      timeout = window.setTimeout(refresh, 250);
    };

    const stopLenis = () => {
      if (!lenis) return;

      if (frame) cancelAnimationFrame(frame);
      if (timeout) window.clearTimeout(timeout);
      unsubscribe?.();
      if (raf) gsap.ticker.remove(raf);
      lenis.destroy();
      lenis = null;
      unsubscribe = null;
      raf = null;
      frame = null;
      timeout = null;
      gsap.ticker.lagSmoothing(500, 33);
    };

    if (isHome) {
      window.addEventListener("home-hero-expanded", startLenis);
      window.addEventListener("home-hero-collapsed", stopLenis);
    } else {
      startLenis();
    }

    return () => {
      window.removeEventListener("home-hero-expanded", startLenis);
      window.removeEventListener("home-hero-collapsed", stopLenis);
      stopLenis();
    };
  }, [pathname]);

  return null;
};

export default SmoothScroll;
