interface Props {
    handleChange :() => void;
    text:string
}
export const ButtonCustom = ({ handleChange,text }:Props) =>{
return (
    <div className="container">
    <div className="mi-clase-superior">
        <div className="mx-auto my-auto p-4">
        <div className="flex justify-center">
            <div className="p-4">
                <button className="bg-slate-100 text-black px-4 py-2 rounded-full hover:bg-orange-400" onClick={handleChange}>{text}</button>
            </div>
            </div>
        </div>
    </div>
    </div>
    
    
)
}