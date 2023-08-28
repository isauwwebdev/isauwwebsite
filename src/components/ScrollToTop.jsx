import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export default function ScrollToTop() {
  const {pathname} = useLocation();

  // scrolls to the top when a different page (or UI) is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}