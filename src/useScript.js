import { useEffect } from "react";

const useScript = (src , crossOrigin = "anonymous") => {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "/src/script.js"
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        
        }
    }, [src,crossOrigin]
    
    );
}

export default useScript;