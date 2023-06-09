import React from 'react'

const useLoadingBackdrop = () => {

    const [openLoadingBackdrop, setOpenLoadingBackdrop] = React.useState(false);

    return {
        openLoadingBackdrop,
        setOpenLoadingBackdrop
    }
}

export default useLoadingBackdrop