import React, { useState } from 'react'
import { navStyles } from './header.styles'


function Header() {

    const [renderMobileNav, setRenderMobileNav] = useState(false);
    const [activeLink, setActiveLink] = useState(window.location.hash && window.location.hash.split('#')[1] || 'home')
    
    return <div {...navStyles} className={renderMobileNav ? 'responsive' : ''}>
        <a href={'#home'} className={activeLink == 'home' ? 'active' : ''}>Home</a>
        <a href={'#skills'} className={activeLink == 'skills' ? 'active' : ''}>Skills</a>
        <a href={'#projects'} className={activeLink == 'projects' ? 'active' : ''}>Projects</a>
        <a href={'#contact'} className={activeLink == 'contact' ? 'active' : ''}>Contact</a>
        <a className="icon" onClick={() => setRenderMobileNav(!renderMobileNav)}>
            <i className="fa fa-bars"></i>
        </a>
    </div>
}

export { Header }