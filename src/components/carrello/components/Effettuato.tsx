import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../styles/ordine-confermato.css"
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import { GLOBAL_CONFIG } from "../../../_config/global";
import Promo from './Promo';
import useCarrello from '../hooks/useCarrello';
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    'id': `full-width-tab-${index}`,
    'aria-control': `full-width-tabpanel-${index}`,
  };
}

export default function Effettuato() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { handleRedirectITuoiOrdini } = useCarrello();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'transparent', width: 810 }}>

      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        className='custom-tabs'

      >
        <Tab
          className="custom-tab"
          label={
            <p className='tab-p'>
              <span className='ml-1 capitalize text-[11px]'>
                Ordine Confermato
              </span>
              <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoProdotti.png`} alt="I nostri prodotti" className="icoImg tab-img-left" />
            </p>}
          {...a11yProps(0)}
        />
        <Tab iconPosition='start'
          className="custom-tab"
          label={
            <p className='labPromo flex flex-row items-center justify-center'>
              <img src={`${GLOBAL_CONFIG.IMG_IP}/img/icoPromo16w.png`} alt="I nostri prodotti" className="icoImg tab-img-left" />
              <span className='ml-1 text-[11px]'>
                Promo
              </span>
            </p>}
          {...a11yProps(1)}
        />
      </Tabs>

      <div className='custom-tab-container'>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className='row'>
            <div className='col col-12 text-center mb-5'>
              <h2 className='font-bold text-lg'>Ordine effettuato correttamente!</h2>
            </div>
            <div className='col col-12 mb-3'>
              Il tuo ordine è stato effettuato in maniera corretta!
            </div>
            <div className='col col-12 mb-3'>
              A breve riceverai tramite email una conferma dell'ordine.
            </div>
            <div className='col col-12 justify-center mb-5'>
              <div className='card-click-aqui'>
                <div className='row cursor-pointer'>
                  <div className='col col-12 mt-3 mb-4'>
                    {/* <Link to={'/AreaPersonale'}> */}
                    <a
                      className='font-bold text-[red]'
                      onClick={() => handleRedirectITuoiOrdini()}
                    >
                      CLICCA QUI
                    </a>
                    {/* </Link> */}

                  </div>
                  <div className='col col-12 mb-4'>
                    {/* <Link to={'/AreaPersonale'}> */}
                    <a onClick={() => handleRedirectITuoiOrdini()} >
                      per <span className='font-bold'>CARICARE I FILE DI STAMPA</span>
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className='col col-12 mb-1'>
                    {/* <Link to={'/AreaPersonale'}> */}
                    <a onClick={() => handleRedirectITuoiOrdini()}>
                      o <span className='font-bold'> EFFETTUARE IL PAGAMENTO</span>

                    </a>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='col col-12 mt-5 mb-40'>
              <p>
                Grazie,
              </p>
              <p className='font-bold'>
                Lo staff Tipografia Former
              </p>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Promo />
        </TabPanel>

      </div>
    </Box>
  );
}