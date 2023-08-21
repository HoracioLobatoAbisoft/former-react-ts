interface Props {
    handleChange: () => void;
    text: string
}
export const ButtonCustom = ({ handleChange, text }: Props) => {
    return (
        <div className=" w-full flex justify-center mt-1">
            <button className="bg-[#eef3f1] text-black px-2 py-1 text-[12px] font-bold rounded hover:bg-[#d6e03d]" onClick={handleChange}>{text}</button>
        </div>
    )
}