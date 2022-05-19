import { TextField } from "@material-ui/core";
import React from "react";
import { Card } from "reactstrap";
import { Button, Tabs, Tab, Checkbox, FormControlLabel } from "@material-ui/core";
import Menusuperior from "../MenuSuperior/menu";
import { withStyles } from '@material-ui/styles';
import { green } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import caminhao from '../img/caminhaotora100x120.png';
import carro from '../img/carro100x120.png';
import moto from '../img/moto100x120.png';

import style from "../PageBuy/compra.css";

function ComprarVeiculo() {
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
            <div className="coluna1-coluna2">
                <Card id='cor-card-coluna1'>
                    <div className="card-col">
                        <CssTextField
                            label="Localização"
                            placeholder="Digite o nome da sua cidade"
                        />
                        <p><strong>Marca do Veículo</strong></p>
                        <div>
                            <CssTextField
                                label="Selecione a Marca"
                            />
                            <CssTextField
                                label="Selecione o Modelo"
                            />
                        </div>

                        <p><strong>Ano Modelo</strong></p>
                        <CssTextField
                            label="De"
                        />
                        <CssTextField
                            label="Até"
                        />

                        <p><strong>Preço</strong></p>
                        <div>
                            <CssTextField
                                label="Min"
                            />
                            <CssTextField
                                label="Máx"
                            />

                            <FormControlLabel
                                control={<GreenCheckbox name="checkedG" />}
                                label="Ocultar Valor a combinar"
                            />
                            <FormControlLabel
                                control={<GreenCheckbox name="checkedG" />}
                                label="Ocultar com Financiamento"
                            />
                        </div>

                        <p><strong>Quilometragem</strong></p>
                        <CssTextField
                            label="Min"
                        />
                        <CssTextField
                            label="Máx"
                        />

                        <p><strong>Situação</strong></p>
                        <div className="campo-situacao">
                            <FormControlLabel
                                control={<GreenCheckbox name="checkedG" />}
                                label="Zero Km"
                            />
                            <FormControlLabel
                                control={<GreenCheckbox name="checkedG" />}
                                label="SemiNovo"
                            />
                        </div>

                        <p><strong>Câmbio</strong></p>
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Automatico"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Manual"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Automatizado"
                        />

                        <p><strong>Vendedor</strong></p>
                        <div className="campo-situacao">
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Particular"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Revenda"
                        />
                        </div>


                        <p><strong>Característica</strong></p>
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Aceita Troca"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="IPVA Pago"
                        />

                        <p><strong>Pode ser financiado?</strong></p>
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Sim"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Não"
                        />

                        <p><strong>Financiamento em aberto?</strong></p>
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Sim"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Não"
                        />


                        <p><strong>Passagem por Leilão?</strong></p>
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Com passagem"
                        />
                        <FormControlLabel
                            control={<GreenCheckbox name="checkedG" />}
                            label="Sem passagem"
                        />

                        <p><strong>Motor</strong></p>
                        <CssTextField
                            placeholder="Selecione Opção"
                        />


                        <p><strong>Combustível</strong></p>
                        <CssTextField
                            placeholder="Selecione Opção"
                        />



                        <p><strong>Cor</strong></p>
                        <CssTextField
                            placeholder="Selecione Opção"
                        />



                        <p><strong>Porta</strong></p>
                        <CssTextField
                            placeholder="Selecione Opção"
                        />

                        <Button>Aplicar Filtro</Button>
                    </div>
                </Card>
                <Card>
                    <div className="coluna2">
                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={caminhao}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio' href="/paganuncio">Comprar</Button>
                            </Card>
                        </div>
                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={caminhao}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio' href="/paganuncio">Comprar</Button>
                            </Card>
                        </div>
                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={caminhao}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio' href="/paganuncio">Comprar</Button>
                            </Card>
                        </div>
                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={caminhao}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio' href="/paganuncio">Comprar</Button>
                            </Card>
                        </div>

                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={carro}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                            </Card>
                        </div>

                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={carro}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                            </Card>
                        </div>

                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={carro}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                            </Card>
                        </div>

                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={carro}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                            </Card>
                        </div>

                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={moto}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                            </Card>
                        </div>

                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={moto}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                            </Card>
                        </div>

                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={moto}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                            </Card>
                        </div>

                        <div className="Card-Linha">
                            <Card id="tamanho-card1" className="linha1-card">
                                <img className="Imagem-cam" id="img-cam" src={moto}></img>
                                <p ><strong>Caminhão Tora  Novo  R$0.000,00 </strong></p>
                                <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default ComprarVeiculo;