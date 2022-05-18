import { Accordion, AccordionSummary, Button, Typography } from "@material-ui/core";
import React from "react";
import Menusuperior from "../MenuSuperior/menu";
import style from '../Ajuda/ajuda.css';
import icons from 'material-icons'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card } from "reactstrap";




function Ajuda() {
    return (
        <div>
            <Menusuperior />
            <div className="colunas">
                <div className="coluna1-card">
                    <Card className="colunacard" id="cor-card-ajuda">
                        <Button>Quem somos</Button>
                        <Button>Políticas de <br/>Privacidade</Button>
                        <Button>Políticas de <br/>Privacidade PJ</Button>
                        <Button>Termos de <br/>Resposabilidade</Button>
                        <Button>Termos de uso</Button>
                        <Button>Publicidade</Button>
                        <Button>Pareceiros</Button>
                        <Button>Dtrans</Button>
                        <Button>Ajuda</Button>
                        <Button>Dicas de Segurança</Button>
                        <Button>Contato</Button>
                    </Card>
                </div>
               
                <div className="campos-sanfona">
                <p id="pajuda" className="p-ajuda-titulo"><strong>Ajuda</strong></p>
                    <Accordion>
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                        >
                            Como anunciar meu Veículo?
                        </AccordionSummary>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                          Como atualizar meu Navegador?
                        </AccordionSummary>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            Como renovar meu anúncio?
                        </AccordionSummary>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                           Placa já Cadastrada
                        </AccordionSummary>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                           expandIcon={<ExpandMoreIcon />}
                        >
                           Quais as forma de pagamento?
                        </AccordionSummary>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </Accordion>
                </div>
            </div>
            <footer id="cor-footer" className="Rodape">
                <p id="fonte">13 de Maio de 2022</p>
                <p id="fonte">email@email.com.br</p>
                <p id="fonte">(31) XXXX - XXXX</p>
            </footer>
        </div>
       
    )
}
export default Ajuda;