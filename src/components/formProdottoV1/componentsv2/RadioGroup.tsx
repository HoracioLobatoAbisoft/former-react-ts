import RadioCustom from "../components/RadioCustom"


interface Props {
    handleChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    valueRadio: string | number;
    aling:string;
}

const RadioGroup = ({handleChange,valueRadio,aling}:Props) => {
    return (
        <div className={` w-full flex gap-5 mb-3 mt-[18px] justify-${aling} text-xs`}>
            <i className="text-[11.5px] me-1">Visualizza prezzo </i>
            <RadioCustom name="valueRadio" value={2} checked={valueRadio === '2'} label="CAD." handleCheckboxChange={handleChange} />
            <RadioCustom name="valueRadio" value={0} checked={valueRadio === '0'} label="Senza IVA" handleCheckboxChange={handleChange} />
            <RadioCustom name="valueRadio" value={1} checked={valueRadio === '1'} label="Con IVA" handleCheckboxChange={handleChange} />
        </div>
    )
}

export default RadioGroup