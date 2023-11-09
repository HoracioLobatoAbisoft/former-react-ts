import React from 'react'

type TooltipProps = {
    children:React.ReactNode;   
}

const TootilpText = ({children}:TooltipProps) => {
    return (
        <div className='absolute w-[300px] bg-black'>
            {children}
        </div>
    )
}

export default TootilpText