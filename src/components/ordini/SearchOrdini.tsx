import { Button, Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import IconButton from '@mui/material/IconButton';

const SearchOrdini = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={2} sx={{ fontSize: "18px", marginTop: "7px", textAlign: "center" }}>
          Cosa stai cercando?
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="search"
            size="small"
            type="search"
            value={searchTerm}
            onChange={handleChange}
            sx={{ width:"100%", paddingX: "2px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2} direction="row">
            <Button size="small" variant="contained" startIcon={<LockOpenIcon />}>Area Riservata</Button>
            <Button size="small" variant="contained" startIcon={<ShoppingCartIcon />}>Carrello</Button>
            <IconButton aria-label="delete" color="primary">
              <CircleNotificationsIcon/>
            </IconButton>
           
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchOrdini;
