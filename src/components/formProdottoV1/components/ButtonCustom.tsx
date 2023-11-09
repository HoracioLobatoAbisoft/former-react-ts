interface Props {
    handleChange?: () => void;
    text: string;
    setviewRow?: React.Dispatch<React.SetStateAction<boolean>>;
    viewRow?: boolean;
}
export const ButtonCustom = ({ handleChange, text,setviewRow,viewRow }: Props) => {
    return (
        <div className=" w-full flex justify-center mt-3.5">
            <button className="bg-[#eef3f1] text-black px-2 py-1 text-[12px] font-bold rounded hover:bg-[#d6e03d]" onClick={()=>{handleChange?handleChange():setviewRow && setviewRow(!viewRow)}}>{text}</button>
        </div>
    )
}