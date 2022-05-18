import { Button } from '@mui/material';
import React from 'react';
import { Card } from 'reactstrap';
import Menusuperior from '../MenuSuperior/menu';
import style from '../Anuncio/anuncie.css';

function Anuncie() {
    return (
        <div>
            <Menusuperior />
            <div className="campo-card-anuncio">
                <Card className='card-anuncio' id='cor-card-anuncio1'>
                    <h2 className='titulo-anuncio'>Anuncie Seu veículo aqui!</h2>
                    <Button id='botao-anuncio' className='botao-anun'>Anuncie Agora!</Button>
                </Card>
            </div>

            <div className='campo-regra'>
                <h2 className="titulo-regra">Como Funciona?</h2>
                <p className='texto-regra' id='texto'>Lorem ipsum lobortis lacinia ligula pulvinar per interdum, pulvinar placerat <br />donec vitae et habitant
                    sociosqu, netus vulputate quam himenaeos aptent erat. <br />egestas tristique iaculis arcu nullam mattis fusce augue,
                    tempor tortor phasellus nisl
                    <br />ultricies fringilla tristique egestas, ultrices <br />venenatis eu accumsan est habitant. eros bibendum class nulla
                    torquent sodales integer  <br />ante, suscipit duis scelerisque <br /> justo conubia commodo conubia vitae,
                    hendrerit metus vivamus gravida sem quis. molestie  <br />inceptos consectetur egestas <br /> faucibus curabitur
                    pulvinar quam faucibus netus, mollis sagittis viverra  <br />augue integer rhoncus velit rhoncus dapibus per,
                    elit amet interdum feugiat porta etiam lorem interdum.
                </p>
            </div>

            <div className='campo-cards-planos'>
                <h2 className='titulo-plano'>Planos para você anunciante!</h2>
                <div className='campo-card-plano'>
                    <div >
                        <Card id='cor-card-anuncio' className='card-an'>
                            <p id='cor-plano'>Lorem ipsum lobortis <br />
                                per interdum, pulvinar<br />
                                et habitant sociosqu<br />
                                uam himenaeos aptent.<br />
                            </p>
                        </Card>
                        <Button id='botao-plano' className='botao-card'>Aderir</Button>

                    </div>
                    <div>
                        <Card id='cor-card-anuncio' className='card-an'>
                            <p id='cor-plano'>Lorem ipsum lobortis <br />
                                per interdum, pulvinar<br />
                                et habitant sociosqu<br />
                                uam himenaeos aptent.<br />
                            </p>
                        </Card>
                        <Button id='botao-plano' className='botao-card'>Aderir</Button>
                    </div>
                    <div>
                        <Card id='cor-card-anuncio' className='card-an'>
                            <p id='cor-plano'>Lorem ipsum lobortis <br />
                                per interdum, pulvinar<br />
                                et habitant sociosqu<br />
                                uam himenaeos aptent.<br />
                            </p>
                        </Card>
                        <Button id='botao-plano' className='botao-card'>Aderir</Button>
                    </div>
                    <div>
                        <Card id='cor-card-anuncio' className='card-an'>
                            <p id='cor-plano'>Lorem ipsum lobortis <br />
                                per interdum, pulvinar<br />
                                et habitant sociosqu<br />
                                uam himenaeos aptent.<br />
                            </p>
                        </Card>
                        <Button id='botao-plano' className='botao-card'>Aderir</Button>
                    </div>
                </div>
                <div className='campo-regra'>
                <h2 className="titulo-regra">Regras do seu anuncio</h2>
                <p className='texto-regra' id='texto'>Lorem ipsum lobortis lacinia ligula pulvinar per interdum, pulvinar placerat <br />donec vitae et habitant
                    sociosqu, netus vulputate quam himenaeos aptent erat. <br />egestas tristique iaculis arcu nullam mattis fusce augue,
                    tempor tortor phasellus nisl
                    <br />ultricies fringilla tristique egestas, ultrices <br />venenatis eu accumsan est habitant. eros bibendum class nulla
                    torquent sodales integer  <br />ante, suscipit duis scelerisque <br /> justo conubia commodo conubia vitae,
                    hendrerit metus vivamus gravida sem quis. molestie  <br />inceptos consectetur egestas <br /> faucibus curabitur
                    pulvinar quam faucibus netus, mollis sagittis viverra  <br />augue integer rhoncus velit rhoncus dapibus per,
                    elit amet interdum feugiat porta etiam lorem interdum.
                </p>
            </div>
            </div>

            
            <footer id='rodape-anunicie'></footer>
        </div>
    )
}
export default Anuncie;