import React, { useState } from 'react'
import { navStyles } from './header.styles'


function Header() {

    const [renderMobileNav, setRenderMobileNav] = useState(false);
    const [activeLink, setActiveLink] = useState(window.location.hash && window.location.hash.split('#')[1] || 'home')

    const setActiveMobileNav = (link) => {
        setRenderMobileNav(false)
        setActiveLink(link)
    }
    
    return <div {...navStyles} className={renderMobileNav ? 'responsive' : ''}>
        <a href={'#home'} onClick={() => setActiveMobileNav('home')} className={activeLink == 'home' ? 'active' : ''}>Home</a>
        <a href={'#skills'} onClick={() => setActiveMobileNav('skills')} className={activeLink == 'skills' ? 'active' : ''}>Skills</a>
        <a href={'#projects'} onClick={() => setActiveMobileNav('projects')} className={activeLink == 'projects' ? 'active' : ''}>Projects</a>
        <a href={'#contact'} onClick={() => setActiveMobileNav('contact')} className={activeLink == 'contact' ? 'active' : ''}>Contact</a>
        <a className="icon" onClick={() => setRenderMobileNav(!renderMobileNav)}>
            <i className="fa fa-bars"></i>
        </a>
    </div>
}

export { Header }