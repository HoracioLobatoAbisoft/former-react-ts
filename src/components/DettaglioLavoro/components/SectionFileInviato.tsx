import RowFileEnviato from "./RowFileEnviato";
type SectionFileInviatoProps = {
    files: any;
} 



const SectionFileInviato  = ({files}: SectionFileInviatoProps) =>{
    return (<>
        <div className="w-full bg-[orange] my-[5px]">
            <span className="text-[14px] text-[white] font-bold ml-[20px]">
               I FILE CHE CI HAI INVIATO
            </span>
        </div>
        <div className="w-full">
            <span className="text-[11px]">
                Qui trovi i file che ci hai inviato. Se i file sono presenti online puoi scaricarli cliccando sul link <b>{`Scarica {e il Nome del File}.`}</b>
            </span>
        </div>
        <div className="w-full rounded-[5px] border justify-center items-center my-[5px]">
            {
                files?.map((e: any, i:number)=>{
                    return<RowFileEnviato 
                            key={`n-${i}`} 
                            nome={e.nome} 
                            type={e.type} 
                            idDettaglioLavoro={e.idDettaglioLavoro}
                        />
                })
            }
        </div>
    </>)
}

export default SectionFileInviato;