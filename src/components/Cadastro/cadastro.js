import React from "react";
import { Card } from "reactstrap";
import { green } from '@material-ui/core/colors';
import {black} from  '@material-ui/core/colors';
import MenuSuperior from '../MenuSuperior/menu';
import { withStyles } from '@material-ui/styles';
import { TextField, Checkbox, FormControlLabel, Button } from '@material-ui/core';
import "../Cadastro/cadastro.css";

function Cadastro() {
    const StyleTextField = withStyles({
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

    const GreenCheckbox = withStyles({
        root: {
            color: green[900],
            '&$checked': {
                color: green[900],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);


    return (
        <div>
            <MenuSuperior />
            <div>
                <p id="pcadastro"><strong>Tora Veículos - Cadastro de Usuarío</strong></p>
            </div>

            <div className="divcard">
                <Card className="card-cadastro" id="cad-card">
                    <p id="pcard" className="titulo-card-cadastro">Preencha os dados abaixo e clique no botão Cadastrar para criar seu cadastro!</p>
                    <div className="linha1">
                        <StyleTextField
                            className="campo1"
                            label="Nome Sobrenome"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"
                        />


                        <StyleTextField
                            label="RG"
                            placeholder="AA-000-000"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"
                        />
                    </div>

                    <div className="linha1">
                        <StyleTextField
                            label="CPF"
                            placeholder="000.000.000-00"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"
                        />

                        <StyleTextField
                            label="Celular"
                            placeholder="(DD) 0000 - 0000"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"
                        />
                    </div>

                    <div className="linha1">
                        <StyleTextField
                            label="Estado"
                            placeholder="MG"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"
                        />
                        <StyleTextField
                            label="Cidade"
                            placeholder="Contagem"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"
                        />

                    </div>

                    <div className="linha1">
                        <StyleTextField
                            label="Email"
                            placeholder="seuemail@example.com"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"
                        />
                        <StyleTextField
                            label="Confirme o Email"
                            placeholder="seuemail@example.com"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"
                        />
                    </div>
                    <div className="linha1">
                        <StyleTextField
                            label="Nova Senha"
                            placeholder="*******"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"
                            helperText='Sua senha deve ter no minimo 6 caracteres'
                        />
                        <StyleTextField
                            label="Confirme a Senha"
                            placeholder="*******"
                            required
                            variant="standard"
                            id="mui-theme-provider-standard-input"

                        />

                    </div>
                    <div className="checkbox-termo">
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Li e aceito os termos de responsabilidade. "
                            required
                        />
                    </div>
                    <div className="checkbox-termo">
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Vendedor"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Comprador"
                        />

                        <Button  id="botao-cadastro">Cadastrar</Button>
                    </div>
                </Card>
            </div>
            <footer id="cor-footer" className="Rodape">
                <p id="fonte">DD de MM de 2022</p>
                <p id="fonte">seuemail@example.com.br</p>
                <p id="fonte">(DD) 0000 - 0000</p>
            </footer>
        </div>
    )
}
export default Cadastro;