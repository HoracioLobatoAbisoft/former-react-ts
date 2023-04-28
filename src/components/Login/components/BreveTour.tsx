import React from 'react'

function BreveTour() {
    {/*Este bloque se encargara de mostrar cada objeto de la lista, añadi una validacion cuando no se le envie una imagen
    no la muestre*/}
    const ListItem = ({ title = "", description = "", image = "" }) => {
        return (
            <div>
                <div className="flex mb-8">
                    <div className="pl-4">
                        <h3 className="text-2xl font-bold mb-2 text-[#850c70]">{title}</h3>
                        <p className="text-gray-700 text-lg">{description}</p>
                    </div>
                </div>
                {image !== "" && <div className="flex items-center justify-center">
                    <img src={image} alt={title} className="h-100 object-cover mx-auto" />
                </div>}
                <br />
            </div>
        );
    };
    {/*Este bloque es el principal, arriba esta el titulo y abajo esta la funcion ListItem para visualizar cada objeto de la lista
    en la parte final esta un texto estatico */}
    return (
        <div>
            <div className="bg-[#850c70] flex items-center justify-center h-80 rounded-md">
                <div className="text-white text-center">
                    <h1 className="text-6xl mb-4"><strong>Un Breve Tour</strong></h1> <br />
                    <p className="text-xl"><i>Registrati e potrai utilizzare tutte le funzioni del sito</i></p>
                </div>
            </div>
            <br />
            <div>
                <p className="text-2xl">
                    Perchè registrarsi a TipografiaFormer.it? <strong> Solo gli utenti registrati </strong>al nostro sito avranno a disposizione:
                </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
                <ul>
                    <li>
                        <ListItem
                            title="Listino Wizard:"
                            description="Sapere il prezzo di un prodotto non è mai stato così facile. Utilizza il nostro semplice wizard e potrai scegliere tutte le opzioni che desideri nella creazione del tuo prodotto."
                            image="src\assets\img\screen1.jpg"
                        />
                    </li>
                    <li>
                        <ListItem
                            title="Scheda Prodotto Completa:"
                            description="Nella scheda di ogni prodotto avrai la possibilità di scegliere le varianti e le opzioni disponibili. Inoltre troverai i template che ti aiuteranno a fornirci i file nella maniera corretta."
                            image='src\assets\img\screen2.jpg'
                        />
                    </li>
                    <li>
                        <ListItem
                            title="Area Riservata:"
                            description="Nella tua area riservata potrai tenere sempre sotto controllo lo stato dei tuoi ordini, scaricare i documenti contabili e accedere a tutte le funzioni riservate agli utenti registrati."
                        />
                    </li>
                    <li>
                        <ListItem
                            title="Glossario Tipografico:"
                            description="Hai dubbi su un termine tecnico? Accedi al nostro glossario tipografico e troverai le definizioni di più di trecento termini riguardanti il mondo della tipografia."
                        />
                    </li>
                </ul>
            </div>
            <div className="text-2xl mt-5 mb-2 flex items-center justify-center">
                <div><strong>Quindi che aspetti?</strong><br />
                    Riempi il breve modulo di registrazione e ti invieremo tramite email i codici di accesso!<br />
                    <strong>Tipografia Former</strong>
                </div>
            </div>
        </div>
    )
}

export default BreveTour