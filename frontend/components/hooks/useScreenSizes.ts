import { useEffect, useState } from "react";

function useScreen() {
  const [isMobile, setIsMobile] = useState<null | boolean>(null); // Initial state is null
  const [isLgScreen, setIsLgScreen] = useState<null | boolean>(null); // Same for large screens
  const [isXsScreen, setXsScreem] = useState<null | boolean>(null); // Same for

  useEffect(() => {
    // This code will only run in the browser (after the component mounts)
    const updateScreenSize = () => {
      setXsScreem(window.innerWidth < 640);
      setIsMobile(window.innerWidth < 799);
      setIsLgScreen(window.innerWidth > 800);
    };

    // Set initial screen size
    updateScreenSize();

    // Listen for resize events
    window.addEventListener("resize", updateScreenSize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return { isMobile, isLgScreen, isXsScreen };
}

export default useScreen;
