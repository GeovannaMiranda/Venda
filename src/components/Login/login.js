import { TextField, Button } from "@mui/material";
import React from "react";

import { Card, Input, Label, Media } from "reactstrap";
import login from '../Login/login.css';

function TelaLogin() {
    /*
        const CssTextField = withStyles({
            root: {
                "& label.Mui-focused" : {
                    color : "white"
                },
                "& label" : {
                    color : "white"
                },
                "& MuiInput_underline:before" :{
                    borderBottomcolor : "white"
                },
                "& MuiInput_underline:after" :{
                    borderBottomcolor : "white"
                },
                "& MuiOutlinedInput-root" :{
                    "& fildset" : {
                        borderColor : "white"
                    },
                    "& :hover fildset :" : {
                        borderColor : "white"
                    },
                    "& :Mui-focused fildset :" : {
                        borderColor : "white"
                    },
                },
    
            }
        })(TextField);
    */
    return (
        <body className="Campo-body">

            <div className="Campo-email-senha">
                <h3 className="titulo">Login</h3>
                <Label>Email:</Label>
                <Input type="Email" id="email"></Input>
                <Label className="senha">Senha:</Label>
                <Input type="Email" id="email"></Input>
                <p>Esqueci minha senha</p>

                <div  className="posicao-botao">
                    <Button id='botao'><strong>Entrar</strong></Button>
                </div>
                
            </div>
        </body>
    );
}
export default TelaLogin;