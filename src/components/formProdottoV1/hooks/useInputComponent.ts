import React, { useEffect, useState } from 'react'
import { OptionsSelect } from '../../formProdotto/interfaces/prodotto';

interface Props {
    value: string | number;
    options: OptionsSelect[];
    idPrev?: string | undefined;
}

const useInputComponent = ({ options, value,idPrev }: Props) => {

    const [hoverIcon, setHoverIcon] = useState(false);
    const [info, setInfo] = useState<OptionsSelect>();
    const [showIcon, setshowIcon] = useState(true);
    const handleHover = () => {
        if (value === "") return
        const valueForm = Number(value)
        setHoverIcon(true);
        const view = options.find((e) => e.value === valueForm);
        setInfo(view);
    };
    useEffect(() => {
        //        console.log(options);

        if (value === "") {
            setshowIcon(false);
            return
        }
        const valueForm = Number(value)
        const icon = options.find((e) => e.value === valueForm);
        setshowIcon(!!icon?.image);
    }, [value]);

    const handleChangeHover = (hover: boolean) => {
        setHoverIcon(hover);
    }

    return {
        hoverIcon,
        info,
        showIcon,
        handleHover,
        handleChangeHover
    }
}

export default useInputComponent