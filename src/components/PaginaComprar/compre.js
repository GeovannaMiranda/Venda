import React from "react";
import Menusuperior from "../MenuSuperior/menu";
import {Card} from 'reactstrap';
import { Tabs, Tab, TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import { green } from "@mui/material/colors";
import { createTheme } from "@mui/material";


import caminhao from '../img/caminhaotora100x120.png';
import carro from '../img/carro100x120.png';
import moto from '../img/moto100x120.png';
function CompraVeiculo() {

    const GreenCheckbox = withStyles({
        root: {
            color: green[900],
            '&$checked': {
                color: green[900],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);


    const theme = createTheme({
        palette: {
            primary: green,
        },
    });
    const CssTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: 'green',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'green',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'red',
                },
                '&:hover fieldset': {
                    borderColor: 'yellow',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'green',
                },
            },
        },
    })(TextField);
    return (
        <div>
            <Menusuperior />
            <div className="campo-coluna1-coluna2">
               <Card id="cor-card-coluna1">   

               </Card>
            </div>
        </div>
    )
}
export default CompraVeiculo;