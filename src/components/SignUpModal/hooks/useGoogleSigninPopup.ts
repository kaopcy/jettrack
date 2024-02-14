import { useEffect, useState } from "react";

const useGoogleSigninPopup = () => {
  const [popup, setPopup] = useState<Window | null>(null);

  const openGooglePopup = () => {
    const newPopup = window.open("/auth/google-signin", "", "width=400,height=400");
    newPopup?.addEventListener("unload", () => {
      console.log("unloaded");
    });
    // setPopup(newPopup);
  };

  // useEffect(() => {
  //   const onPopupClose = () => {
  //     console.log("popup close");
  //   };

  //   if (popup) {
  //     popup.addEventListener("unload", onPopupClose);
  //   }

  //   return () => {
  //     if (popup) popup.removeEventListener("unload", onPopupClose);
  //   };
  // }, [popup]);

  return { popup, openGooglePopup };
};

export default useGoogleSigninPopup;
