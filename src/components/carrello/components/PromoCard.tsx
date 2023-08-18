import { Link } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../../_config/global";

interface RowPricePromoProps {
    price: String;
    quantity: String;
    unitMeasure: String; 
    promoPrice: String;
}

const RowPricePromo = (rowPrice: RowPricePromoProps) => {
    return (
        <>
        <div className="row px-0 mt-1">
            <div className="">
                <p className="flex flex-row items-center justify-between bg-[#f1f1f1]">
                    <span className="font-bold text-[#cb0012] text-[16px] line-through">
                        {`€ ${rowPrice.price}`}
                    </span>
                    <span className="ml-1 font-bold text-[14px]">
                        {`(${rowPrice.quantity} ${rowPrice.unitMeasure})`}
                    </span>
                </p>
                <p className="flex flex-row items-center justify-start">
                    <span className="prezzoPromo">
                        {`${rowPrice.promoPrice}`}
                    </span>
                    <span className="labPromo text-[11px] ml-2">
                        Promo
                    </span>
                </p>
            </div>
        </div>
        </>
    )
}

interface PromoCardProps {
    children?: React.ReactNode;  
    promo: any;
}

const PromoCard = ({promo}: PromoCardProps) =>{

    const formatingValidDate = (dateString: string) => {
        let date = dateString.split('T')[0].split("-");
        return `${date[2]??'00'}/${date[1]??'00'}/${date[0]??'0000'}`;
    }
    return <>
    <div className="col col-12 promo-card-container risultatoRicerca">
        <div className="row">
            <div className="col col-3">
                <img src={`${GLOBAL_CONFIG.IMG_IP}/${promo.imgRif??''}`}/>
            </div>
            <div className="col col-9">
                <div className="row">
                    <div className="col col-9">
                        <div className="row">
                            <div className="col col-12">
                                <Link to={`${promo.url}`} className="font-bold text-[black] text-[14px]">
                                    {`${promo.nome}`}
                                </Link>
                            </div>
                            <div className="col col-12">
                                <p className="text-[14px]">
                                    {`Categoria: ${promo.categoria}`}
                                </p>
                            </div>
                            <div className="col col-12">
                                <p className="text-[14px]">
                                    {`Formato: ${promo.formato}`}
                                </p>
                            </div>
                            <div className="col col-12">
                                <p className="text-[14px]">
                                    {`Carta: ${promo.carta}`} 
                                </p>
                            </div>
                            <div className="col col-12">
                                <p className="text-[14px]">
                                    {`Colori: ${promo.colori}`}
                                </p>
                            </div>
                            <div className="col col-12">
                                <p className="description-promo-card">
                                    {`${promo.descripcion}`}
                                </p>
                            </div>
                            <div className="col col-12 mt-[10px]">
                                <div className="boxPromo">
                                    <p className="flex flex-row text-[15px]">
                                        <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPromo20.png`} className="h-[16px] w-[16px]"/> 
                                        <b className="labPromo font-bold mx-1">Promo</b> Prodotto in promozione con sconto del <b className="labPromo font-bold mx-1">{`${promo.porcentajePromo}%`}</b>
                                    </p>
                                    <p className="text-[10px] mt-1">
                                        {`* Valido fino al ${formatingValidDate(promo.fechaValidaPromo)} salvo esaurimento scorte`}
                                    </p>
                                </div>
                            </div>
                            <div className="col col-12 mt-[10px]">
                                <div className="">
                                    <p className="flex flex-row text-[12px] items-center justity-center">
                                        <div className="flex flex-row" dangerouslySetInnerHTML={{ __html: String(promo.stars) }}>

                                        </div>
                                        
                                        {
                                            promo.recensioni&&
                                            <span className="font-bold ml-2">
                                                {`${promo.recensioni}`}
                                            </span>
                                        }
                                        <span className= {`${promo.recensioni?`ml-1`:`ml-2`}`}>
                                            {`${promo.recensioni?`recensioni`:`Non sono ancora presenti recensioni`}`}
                                        </span>
                                    </p>
                                    {
                                      promo.voto
                                      &&
                                      <p className="flex flex-row text-[12px] items-center justity-center mt-[5px] pl-[15px]">
                                        <span className="font-bold">
                                            {`${promo.voto??0}`}
                                        </span> 
                                        <span className="ml-1">
                                            su 5 stelle
                                        </span>
                                      </p>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col col-3">
                       <RowPricePromo
                            price={`${(promo.showPrezziRiv?promo.prezzo1RivStr:promo.prezzo1Str).replace('.',',')}`}
                            unitMeasure={`${promo.unitaMisura}`}
                            quantity={`${promo.qta1}`}
                            promoPrice={`${(promo.showPrezziRiv?promo.prezzo1RivPStr:promo.prezzo1PStr).replace('.',',')}`}
                        />
                        <RowPricePromo
                            price={`${(promo.showPrezziRiv?promo.prezzo2RivStr:promo.prezzo2Str).replace('.',',')}`}
                            unitMeasure={`${promo.unitaMisura}`}
                            quantity={`${promo.qta2}`}
                            promoPrice={`${(promo.showPrezziRiv?promo.prezzo2RivPStr:promo.prezzo2PStr).replace('.',',')}`}
                        />
                        <RowPricePromo
                            price={`${(promo.showPrezziRiv?promo.prezzo3RivStr:promo.prezzo3Str).replace('.',',')}`}
                            unitMeasure={`${promo.unitaMisura}`}
                            quantity={`${promo.qta3}`}
                            promoPrice={`${(promo.showPrezziRiv?promo.prezzo3RivPStr:promo.prezzo3PStr).replace('.',',')}`}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 mt-[10px] mb-[10px] px-[5px]">
                        <div className="flex border-[#d6e03d] border-[1px] bg-[#f58220] "/>
                        <div className="flex flex-row items-center justify-end mx-0 px-0 mt-[10px]">
                            <Link to={`${promo.url}`} className="flex flex-row">
                                <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoFreccia16.png`}/>
                                <span className="ml-[3px] text-[12px]">
                                    Vai al dettaglio del Prodotto
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    </>
}

export default PromoCard;