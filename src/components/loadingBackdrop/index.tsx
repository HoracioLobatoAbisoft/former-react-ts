import { Backdrop } from "@mui/material";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
import useLoadingBackdrop from "./useLoadingBackdrop";

interface Props {
    isOpen:boolean
    HandleChange:(v:boolean) => void
}
const LoadingBackdrop = ({isOpen,HandleChange}:Props) => {



    return (
        <Backdrop
            sx={{ bgcolor: 'rgba(225,225,225,0.4)',display:'flex',flexDirection:'column',justifyContent:'space-between',pr:8,}}
            open={isOpen}
            //onClick={()=>HandleChange(!isOpen)}
        >
            
            <RotatingLines
                strokeColor="grey"
                strokeWidth="2.5"
                animationDuration="0.75"
                width="140"
                visible={true}
                
            />
            <RotatingLines
                strokeColor="grey"
                strokeWidth="2.5"
                animationDuration="0.75"
                width="140"
                visible={true}
                
            />
            <RotatingLines
                strokeColor="grey"
                strokeWidth="2.5"
                animationDuration="0.75"
                width="140"
                visible={true}
                
            />
            <RotatingLines
                strokeColor="grey"
                strokeWidth="2.5"
                animationDuration="0.75"
                width="140"
                visible={true}
                
            />
            <RotatingLines
                strokeColor="grey"
                strokeWidth="2.5"
                animationDuration="0.75"
                width="140"
                visible={true}
                
            />
            <RotatingLines
                strokeColor="grey"
                strokeWidth="2.5"
                animationDuration="0.75"
                width="140"
                visible={true}
                
            />
            <RotatingLines
                strokeColor="grey"
                strokeWidth="2.5"
                animationDuration="0.75"
                width="140"
                visible={true}
                
            />
        </Backdrop>
    )

};

export default LoadingBackdrop;
