import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import imgLogo from "../../assets/img/logo.png";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Youtube from "@mui/icons-material/YouTube";
import { Link } from "@mui/material";
import "../../App.css";

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={imgLogo} alt="" />
          </Grid>
          <Grid item xs={6} sx={{ fontSize: "20px", marginTop: "10px" }}>
            Benvenuto <span className="header-sub">CF advertising di Fabrizi...</span>, <span className="button-esci">Esci</span>
          </Grid>
          <Grid item xs={2} sx={{marginTop: "10px"}}>
            <Facebook  />
            <Instagram  />
            <Twitter  />
            <Youtube  />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2} display="flex" justifyContent="center">
        <Grid item>
          <Link underline="none" className="links-header">
            Area Riservata
          </Link>
        </Grid>
        <Grid item>|</Grid>
        <Grid item>
          <Link underline="none" className="links-header">
            I tuoi Ordini
          </Link>
        </Grid>
        <Grid item>|</Grid>
        <Grid item>
          <Link underline="none" className="links-header">
            I tuoi Lavori
          </Link> 
        </Grid>
        <Grid item>|</Grid>
        <Grid item>
          <Link underline="none" className="links-header">
            I tuoi Coupon di Sconto
          </Link>
        </Grid>
        <Grid item>|</Grid>
        <Grid item>
          <Link underline="none" className="links-header">
            Le tue Recensioni
          </Link>
        </Grid>
        <Grid item>|</Grid>
        <Grid item>
          <Link underline="none" className="links-header">
            Contattaci
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
