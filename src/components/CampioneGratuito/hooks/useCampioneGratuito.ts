import { useEffect, useState } from "react"
import { enOperationFrame } from "../../../enHelpers/enOperationFrame";
import { GLOBAL_CONFIG } from "../../../_config/global";
import { useNavigate } from "react-router-dom";

const useCampioneGratuito = () => {

    const navigate = useNavigate();

    const [campioneText, setCampioneText] = useState("")

    //*funciones get




    //*Handle 
    const handleOperationFrame = (operation: enOperationFrame, uri?: string, nav?: string) => {
        window.parent.postMessage({ color: 'bg_hidden', operation: operation, uri: uri }, GLOBAL_CONFIG.IMG_IP);
        if (nav) {
            navigate(nav);
        }
    }

    //*effect helpers
    const effectGetCampioneText = () => {
        const txt = localStorage.getItem('campione');
        if (txt == "" || txt == undefined) {
            handleOperationFrame(enOperationFrame.reliadUrl, GLOBAL_CONFIG.IMG_IP + "");
        }
        else {
            setCampioneText(txt);
        }
    }

    useEffect(() => {
        effectGetCampioneText();
    }, [])


    return {
        //*States
        campioneText,
        //*
    }
}

export default useCampioneGratuito