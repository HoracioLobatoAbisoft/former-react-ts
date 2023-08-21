import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ITouiOrdini = () => {
    return (
        <Accordion>
            <AccordionSummary
                //expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className=""
            >   
                <span className="">+</span>
                <div className="">
                    <img src="" alt="" />
                    <span className=""></span>
                    <span className=""></span>
                </div>
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default ITouiOrdini