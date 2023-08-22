import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ListLavori } from '../Interfaces/OrdiniIntarface';

type PropsAcordionLavori = {
    listLavori:ListLavori[]
}

const AcordionLavori = ({listLavori}:PropsAcordionLavori) => {
    return (
        <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </AccordionSummary>
            <AccordionDetails>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>
    )
}

export default AcordionLavori