import { Box } from "@mui/material"

const ReplilogoOrdine = (row:any) => {
    return (
        <div className="flex justify-around items-center">
            <div>
                <h2 className="font-semibold text-base">Riepilogo Ordine</h2>
                <div className="flex space-x-4 items-center mt-2 text-sm">
                    <p className="w-28">Data Consegna</p>{" "}
                    <p className="font-semibold">{row.giornoStr}</p>
                </div>
                <div className="flex space-x-4 items-center mt-2 text-sm">
                    <p className="w-28">N° Lavori</p>{" "}
                    <p className="font-semibold">{row.count}</p>
                </div>
                <div className="flex space-x-4 items-center mt-2 text-sm">
                    <p className="w-28">Corriere</p>{" "}
                    <p className="font-semibold">{row.corriereStr}</p>
                </div>
                <div className="flex space-x-4 items-center mt-2 text-sm">
                    <p className="w-28">Indirizzo</p>{" "}
                    <p className="font-semibold">{row.indirizzoStr}</p>
                </div>
                <div className="flex space-x-4 items-center mt-2 text-sm">
                    <p className="w-28"></p>{" "}
                    <p className="font-semibold">
                        {" "}
                        (Colli {row.colliStr}, Peso {row.pesoKG} kg ±)
                    </p>
                </div>
                <div className="flex space-x-4 items-center mt-2 text-sm">
                    <p className="w-28">Pagamento</p>{" "}
                    <p className="font-semibold">{row.pagamentoStr}</p>
                </div>
                <div className="mt-4">
                    <p className="text-base font-semibold">LAVORI NELL' ORDINE</p>
                    <p>Qui trovi l'elenco dei lavori che sono contenuti in questo Ordine.</p>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <Box
                        component="span"
                        sx={(theme) => ({
                            backgroundColor: `${row.coloreStatoHtml}`,
                            borderRadius: "0.25rem",

                            width: "auto",
                            padding: "8px 15px",
                        })}
                    >
                        <span>{row.statoStr}</span>
                    </Box>
                </div>

                <div className="flex space-x-4 items-center mt-2 text-sm">
                    <p className="w-28">Totale Lavori:</p>{" "}
                    <p className="font-semibold">€ {row.importoTotOrdiniNettoOriginaleStr}</p>
                </div>
                <div className="flex space-x-4 items-center mt-2 text-sm">
                    <p className="w-28">Totale Spedizioni:</p>{" "}
                    <p className="font-semibold">€ {row.importoConsegnaStr}</p>
                </div>
                <div className="flex space-x-4 items-center mt-2 text-sm">
                    <p className="w-28">IVA (22%):</p>{" "}
                    <p className="font-semibold">€ {row.importoTotIvaStr}</p>
                </div>
                <div className="flex space-x-4 items-center mt-2 text-sm bg-[#d6e03d]">
                    <p className="w-28">TOTALE:</p>{" "}
                    <p className="font-semibold">€ {row.importoTotStr}</p>
                </div>
            </div>
        </div>
    )
}

export default ReplilogoOrdine