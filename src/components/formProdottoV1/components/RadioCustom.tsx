import React from 'react'

interface Props{
    label:string,
    handleCheckboxChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    value:number
    checked:boolean
    name:string
}

const RadioCustom = ({label,handleCheckboxChange,value,name,checked}:Props) => {
    return (
        <div className=""><input type="radio" name={name} value={value} checked={checked} onChange={handleCheckboxChange} /> <span> {label}</span></div>
    )
}

export default RadioCustom