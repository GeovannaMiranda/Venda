import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { Card, Input, Label, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import Menusuperior from "../MenuSuperior/menu";
import styles from "../Paginainicial/pagina1.modules.css";
import { withStyles } from '@material-ui/styles';
import { green } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import { Checkbox, FormControlLabel } from '@material-ui/core';
import icons from 'material-icons';

import moment from 'moment';
import { ptBR } from 'date-fns/locale'

import caminhao from '../img/caminhaotora100x120.png';
import carro from '../img/carro100x120.png';
import carreta from '../img/carreta100x110.png';

function PaginaIncial() {

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

    function hoje() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var formatado = dd + '/' + mm + '/' + yyyy;
        var bd = yyyy + '' + mm + '' + dd;
        var valores = { 'formatado': formatado, 'bd': bd };
        return valores;
    }

    const [selectDateIni, setSelectDateIni] = useState(null);
    const [isActive, setIsActive] = useState(false)
    function onChange(ev) {
        const {
            name, value
        } = ev.target;
        setSelectDateIni(value); console.log(value)
        if (ev !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const datainicial = moment(selectDateIni).format("YYYYMMDD")


    const CssSelect = withStyles({
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
    })(Select);

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

        <div className="Corpo">
            <Menusuperior />
            <div className='pesquisa'>
                <h2>Qual Carro Você Precisa?</h2>
                <CssTextField
                    placeholder="Pesquise"
                    variant="standard"
                    id="mui-theme-provider-outlined-input"
                />
            </div>

            <div className="campo-pesquisa-veiculo">
                <div className="caixaselecao">
                    <p id="cor-titulo-veiculo"><strong>Veículo</strong></p>
                    <Button id='botao-veiculos'><i class="material-icons-outlined">local_shipping</i></Button>
                    <Button id='botao-veiculos'><i class="material-icons-outlined">directions_car</i></Button>
                    <Button id='botao-veiculos'><i class="material-icons-outlined">local_shipping</i></Button>
                </div>
                <div className="Marca-e-Modelo">
                    <div className="Marca">
                        <p id="cor-titulo-veiculo"><strong>Marca</strong></p>
                        <CssSelect
                            placeholder="Marca"
                            variant="standard"
                            id="selecao"

                        >
                            <MenuItem>Selecione Opção</MenuItem>
                        </CssSelect>
                    </div>
                    <div className="modelo">
                        <CssSelect placeholder="Modelo" variant="standard" id="selecao" >
                            <MenuItem>Selecione Opção</MenuItem>
                        </CssSelect>
                    </div>
                </div>

            </div>

            <div className="campo-pesquisa-data">
                <div className='campo-data-grid'>
                    <div className="campo-data">
                        <p id="cor-titulo-veiculo"><strong>Ano</strong></p>
                        <CssTextField
                            id='datalancamento'
                            defaultValue=""
                            onChange={onChange}
                            locale={ptBR}
                            dateFormat="P"
                            withPortal
                            variant="standard"
                            type='date'
                        />
                    </div>
                    <div className="data">
                        <CssTextField
                            className="data"
                            id='datalancamento'
                            onChange={onChange}
                            locale={ptBR}
                            dateFormat="P"
                            withPortal
                            variant="standard"
                            type='date'
                        />
                    </div>
                </div>

                <div className="campo-preco">
                    <div className="minimo">
                        <p id="cor-titulo-veiculo"><strong>Preço</strong></p>
                        <CssTextField variant="standard" placeholder="R$ Min." id="tamanho"></CssTextField>
                    </div>
                    <div className="maximo">
                        <CssTextField variant="standard" placeholder="R$ Max." id="tamanho-max"></CssTextField>
                    </div>
                </div>
            </div>

            <div className="campo-pesquisa-checkbox">
                <div className="part">
                    <FormControlLabel
                        control={<GreenCheckbox name="checkedG" />}
                        label="Particular"
                    />
                </div>
                <div className="part">
                    <FormControlLabel
                        control={<GreenCheckbox name="checkedG" />}
                        label="SemiNovo"
                    />
                </div>


                <div className="part1">
                    <FormControlLabel
                        control={<GreenCheckbox name="checkedG" />}
                        label="Revenda"
                    />
                </div>
                <div className="part1">
                    <FormControlLabel
                        control={<GreenCheckbox name="checkedG" />}
                        label="Zero Km"
                    />
                </div>

            </div>


            <div className="campo-placa">
                <div className="pesquisa-botao">
                    <CssTextField variant="standard" className='csstext' placeholder="Placa ou Código" id='tamanho-pesquisa'></CssTextField>
                    <Button className="botao-pesquisar-placa" id="botao-placa" theme={theme}>Pesquisar</Button>
                </div>
            </div>

            <div className="campo-card">
                <div className="Card Card-1">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={caminhao}></img>
                        <p id="descricao"><strong>Caminhão Tora <br /> Novo <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                </div>
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={caminhao}></img>
                        <p id="descricao"><strong>Caminhão Tora <br /> Novo <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                </div>
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={caminhao}></img>
                        <p id="descricao"><strong>Caminhão Tora <br /> Novo <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                </div>
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={caminhao}></img>
                        <p id="descricao"><strong>Caminhão Tora <br /> Novo <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href='/paganuncio'>Comprar</Button>
                </div>

            </div>

            <div className="campo-cards">
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={carro}></img>
                        <p id="descricao"><strong>Carro Tora <br /> Seminovo <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href="/paganunciocarro">Comprar</Button>
                </div>
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={carro}></img>
                        <p id="descricao"><strong>Carro Tora <br /> Seminovo <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href="/paganunciocarro">Comprar</Button>

                </div>
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={carro}></img>
                        <p id="descricao"><strong>Carro Tora <br /> Seminovo <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href="/paganunciocarro">Comprar</Button>

                </div>
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={carro}></img>
                        <p id="descricao"><strong>Carro Tora <br /> Seminovo <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href="/paganunciocarro">Comprar</Button>
                </div>

            </div>

            <div className="campo-cards">
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={carreta}></img>
                        <p id="descricao"><strong>Carreta Tora <br /> Revenda <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href="/paganunciocarreta">Comprar</Button>

                </div>
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={carreta}></img>
                        <p id="descricao"><strong>Carreta Tora <br /> Revenda <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href="/paganunciocarreta">Comprar</Button>
                </div>
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={carreta}></img>
                        <p id="descricao"><strong>Carreta Tora <br /> Revenda <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href="/paganunciocarreta">Comprar</Button>
                </div>
                <div className="Card">
                    <Card id='Cor' className="descricao-posicao">
                        <img className="Imagem" src={carreta}></img>
                        <p id="descricao"><strong>Carreta Tora <br /> Revenda <br /> R$0.000,00 </strong></p>
                    </Card>
                    <Button style={{ margin: '0 0 0 22%' }} id="botao-car1" theme={theme} href="/paganunciocarreta">Comprar</Button>
                </div>

            </div>

            <div className="paginacao">
                <Pagination size="sm" aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
            <footer id="cor-footer" className="Rodape">
                <p id="fonte">13 de Maio de 2022</p>
                <p id="fonte">email@email.com.br</p>
                <p id="fonte">(31) XXXX - XXXX</p>
            </footer>
        </div>
    )
}
export default PaginaIncial;