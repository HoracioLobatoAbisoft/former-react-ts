import { Backdrop, SxProps } from "@mui/material";
import React from "react";
import { RotatingLines } from "react-loader-spinner";
import useLoadingBackdrop from "./useLoadingBackdrop";
import { Theme } from "@emotion/react";

interface Props {
    isOpen: boolean
    HandleChange?: (v: boolean) => void
    x: number;
    sx?: SxProps<Theme> | undefined
}
const LoadingBackdrop = ({ isOpen, HandleChange, x = 1,sx }: Props) => {


    const IconRoating: JSX.Element[] = [];

    for (let i = 0; i < x; i++) {
        IconRoating.push(<RotatingLines
            key={i}
            strokeColor="grey"
            strokeWidth="2.5"
            animationDuration="0.75"
            width="140"
            visible={true}

        />)
    }
    return (
        <Backdrop
            sx={sx}
            open={isOpen}
        //onClick={()=>HandleChange(!isOpen)}
        >
            {IconRoating}
            {/* <RotatingLines
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
                
            /> */}
        </Backdrop>
    )

};

export default LoadingBackdrop;
