import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    // 1. Load Botpress client
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.async = true;

    // Once the client is loaded, load the bot config
    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2025/08/20/09/20250820091956-Y1LXJFY8.js";
      script2.defer = true;
      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      // cleanup on unmount
      document.body.removeChild(script1);
      const existingConfigScript = document.querySelector(
        'script[src="https://files.bpcontent.cloud/2025/08/20/09/20250820091956-Y1LXJFY8.js"]'
      );
      if (existingConfigScript) document.body.removeChild(existingConfigScript);
    };
  }, []);

  return null; // no visible UI
}
