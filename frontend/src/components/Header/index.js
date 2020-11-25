import React from 'react';
import { Logo, HeaderContainer } from './styles';

import Icone from '../../assets/logo.png';

function Header(props) {
    return (
        <>
           <HeaderContainer>
               <Logo src={Icone} alt='Atena - Encurtador de URL' />
               <h1>Atena</h1>
               <p>{props.children}</p>
           </HeaderContainer>
        </>    
    )
}

export default Header;