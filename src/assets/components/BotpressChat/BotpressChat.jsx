import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    // Load Botpress client
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Load Botpress config (your bot)
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/08/20/09/20250820091956-Y1LXJFY8.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      // cleanup on unmount
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // no visible UI
}
