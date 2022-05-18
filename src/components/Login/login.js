import React from "react";
import style from "../Login/login.css";
import { withStyles } from '@material-ui/styles';
import { Button, ButtonBase, TextField } from '@mui/material';
import { Card } from "reactstrap";
import logo from '../img/logotora.png';



function Login() {

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
                    borderColor: 'green',
                },
                '&:hover fieldset': {
                    borderColor: 'green',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'green',
                },
            },
        },
    })(TextField);

    return (
        <div className="Corpo-login">
            <div className="campo-login">
                <Card className="card-login" id="tamanho-card-login">
                    <div className="campo-email-senha">
                        <p className="titulo-login" id="titlle-login">LOGIN</p>
                        <CssTextField
                            label="Email"
                            placeholder="Seumail@example.com"
                            variant="standard"
                        />
                        <CssTextField
                            label="Senha"
                            placeholder="*******"
                            variant="standard"
                        />
                        <p id="p-esquecisenha">Esqueci minha senha</p>
                        <Button id="botao-login" className="botaoentrar">Entrar</Button>

                        <div className="campo-cadastrese">
                            <p id="p-cadastre"><strong>Não possui Cadastro? </strong></p>
                            <Button id="botao-cadastrese" className="altura-botao"><strong>Cadastre-se</strong></Button>
                        </div>
                    </div>

                </Card>
                <div className="logo-telalogin">
                    <img src={logo} style={{ width: '100px', height: '100px' }}></img>
                </div>
            </div>
    

        </div>
    )
}
export default Login;