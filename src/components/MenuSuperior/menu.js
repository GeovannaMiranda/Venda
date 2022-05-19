import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, DropdownMenu, DropdownItem } from "reactstrap";
import menu from '../MenuSuperior/menu.css';
import logo from '../../assests/logotora.png';


const Menusuperior = (props) => {
    return(
        <div className="menusuperior">
        <Navbar>
            <NavbarBrand href="/"><img src={logo} className="logo"></img></NavbarBrand>
            <Nav className="menu">
                <DropdownMenu >
                    <DropdownItem id="drop" href="/paginainicial" >Home</DropdownItem>
                </DropdownMenu>

                <DropdownMenu >
                    <DropdownItem id="drop" href="compraveiculo">Compre</DropdownItem>
                </DropdownMenu>
                
                <DropdownMenu>
                    <DropdownItem id="drop" href="/anuncie">Anuncie</DropdownItem>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownItem id="drop" href="/ajuda">Ajuda</DropdownItem>
                </DropdownMenu>

                <DropdownMenu >
                    <DropdownItem id="drop" href="/cadastro">Cadastre-se</DropdownItem>
                </DropdownMenu>

                <DropdownMenu className="entrar">
                    <DropdownItem id="drop" href='/'>Entrar<i class="material-icons right" href='/' >account_circle</i></DropdownItem>
                </DropdownMenu>
            </Nav>
        </Navbar>
    </div>
    )
}
export default Menusuperior;