import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // try to scroll to element for hash links
      const id = decodeURIComponent(hash.replace("#", ""));
      const el = document.getElementById(id) || document.querySelector(hash);
      if (el) {
        // Element.scrollIntoView exists on Element, call it if available
        if (typeof el.scrollIntoView === "function") {
          el.scrollIntoView({ behavior: behavior === "smooth" ? "smooth" : "auto" });
        }
        return;
      }
    }
    // default: go to top on route change
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);

  return null;
}