import {Navbar, NavItem} from "react-materialize";
import React from "react";
import '../styles/navbar.css'

const brandColor = <span style={{color: "#006400", marginLeft: '10px', fontWeight:'bold'}}>ICFER ERP</span>;

export const NavbarComponent = ()=>(
    <div>
        <Navbar className={`Header white`} brand={brandColor} fixed={true} right >
            <NavItem href='/'><div className={'navitems'}>Login</div></NavItem>
            <NavItem href='/'><div className={'navitems'}>About</div></NavItem>
        </Navbar>
    </div>
);
