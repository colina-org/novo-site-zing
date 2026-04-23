"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
      offset: 0,
    });

    requestAnimationFrame(() => AOS.refresh());

    const onLoad = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}
