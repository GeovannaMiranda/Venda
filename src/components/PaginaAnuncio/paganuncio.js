import React from 'react';
import Menusuperior from '../MenuSuperior/menu';
import paganuncio from '../PaginaAnuncio/paganuncio.css';
import { TextField, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { withStyles } from '@material-ui/styles';
import { Card } from 'reactstrap';
import caminhao from '../img/caminhaotora.png';
import caminhao2 from '../img/caminhaotora100x120.png';
import { Button } from '@material-ui/core';
import icons from 'material-icons';
function PagAnuncio() {


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
        <div>
            <Menusuperior />
            <div>
                <div className='campo-card-flex'>
                    <div className='card-flex'>
                        <Card className='card1'>
                            <img src={caminhao2} id='tam-img'></img>
                            <img src={caminhao2} id='tam-img'></img>
                            <img src={caminhao2} id='tam-img'></img>
                        </Card>
                        <Card className='card2'>
                            <img src={caminhao} id='tam-img-principal'></img>

                        </Card>
                    </div>

                    <div className='card-coluna3'>
                        <Card id='cor-card-paganuncio' >
                            <p className='p-paganuncio' style={{ color: '#006400' }}><strong>Descrição Veículo</strong><br /></p>

                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria<br />
                                tipográfica e de impressos, e vem sendo utilizado desde o século<br />
                                XVI, quando um impressor desconhecido pegou uma bandeja de tipos <br />
                            </p>


                            <div className='caixa-de-texto'>
                                <CssTextField
                                    id="caixadetexto"
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
                                    variant="outlined"
                                />

                                <Button className='botao-enviarmsg' id='cor-botao-enviarmsg'>Enviar Mensagem</Button>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className='campo-card-flex'>
                    <Card id="card-linha2" className='card-coluna4'>
                        <div className='linha'>
                            <p>Quilometragem <br /> <strong>95.000 Km</strong></p>
                            <p>Câmbio <br /> <strong>Manual</strong></p>
                            <p><i class="material-icons outlined">event_available</i> Ano - Modelo <br />  <strong>2015/2015</strong></p>
                        </div>

                        <div className='linha'>
                            <p>Portas <br /> <strong>2</strong></p>
                            <p>Combustível <br /> <strong>Bi-Combustível</strong></p>
                            <p> Placa<br />  <strong>QQJ</strong></p>
                        </div>

                        <div className='linha'>
                            <p>Troca? <br /> <strong>Não Aceita Troca</strong></p>
                            <p>Cor <br /> <strong>Branco</strong></p>
                        </div>

                    </Card>

                    <div className='card-coluna5'>
                        <Card id='card-contato' >
                            <div className='p-card-contato'>
                                <p style={{ color: '#006400' }}><strong>Entre em Contato</strong></p>

                                <p><strong>Dados do Vendedor<i class="material-icons right">face</i></strong></p>
                                <p><i class="material-icons left">call</i>(DD) 0000 - 0000</p>
                                <p><i class="material-icons left">call</i>(DD) 0000 - 0000</p>


                                <p><i class="material-icons left">mail</i>EmailVendedor@email.com</p>
                                <p><i class="material-icons left">pin_drop</i> Contagem</p>
                            </div>
                        </Card>
                    </div>

                </div>

                <div className='campo-card-flex'>
                    <div className='titulo-card-acessorio'>
                        <p id='p-sobre'><strong>Sobre esse Veículo</strong></p>
                        <p style={{ color: '#9c9c9c' }}>O Proprietário não forneceu Observações</p>

                        <Accordion id='tamanho-acordeao'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography >Acessórios</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <footer id="cor-footer" className="Rodape">
                    <p id="fonte">13 de Maio de 2022</p>
                    <p id="fonte">email@email.com.br</p>
                    <p id="fonte">(31) XXXX - XXXX</p>
                </footer>
            </div>
        </div>
    )
}
export default PagAnuncio;