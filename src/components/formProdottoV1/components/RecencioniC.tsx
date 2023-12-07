import { DataGetAggiornaReview } from "../interface/AggiornaReview"

type RecencioniCProps = {
    item: DataGetAggiornaReview
}

const RecencioniC = ({ item }: RecencioniCProps) => {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-1 bg-[#f1f1f1] pt-[4px] pe-[10px] ps-[8px] pb-[10px]">
                <div className="flex items-center  gap-1">
                    <div className="flex" dangerouslySetInnerHTML={{ __html: String(item.stars) }}></div>
                    <span className="text-[11px]">di <b>{item.nomeUt}</b> il {item.quando}</span>
                </div>
                <div className="w-full text-[12px] flex flex-col gap-[5px]">
                    <div className="w-full flex items-center gap-2">
                        <p className="bg-[#1aaf5d] text-white w-[10%] rounded-[2px] px-[2px] ">+ Pro</p> 
                        <p className="w-[90%]"><i>"{item.pregi}"</i></p>
                    </div>
                    <div className="w-full flex gap-2 items-start ">
                        <p className="bg-[red] w-[10%] text-white rounded-[2px] px-[2px] ">- Contro</p>
                        <p className="w-[90%]"><i className="">"{item.difetti}"</i></p>
                    </div>
                </div>
            </div>
            <p className="text-[11px] mt-[2px]">{item.prodotto}</p>
        </div>
    )
}

export default RecencioniC