import React, { useState } from 'react'
import { navStyles } from './header.styles'


function Header() {

    const [renderMobileNav, setRenderMobileNav] = useState(false);
    const [activeLink, setActiveLink] = useState(window.location.hash && window.location.hash.split('#')[1] || 'home')

    const navigateURL = (link) => {
        setActiveLink(link)
    }
    
    return <div {...navStyles} className={renderMobileNav ? 'responsive' : ''}>
        <span onClick={() => navigateURL('home')} className={activeLink == 'home' ? 'active' : ''}>Home</span>
        <span onClick={() => navigateURL('skills')} className={activeLink == 'skills' ? 'active' : ''}>Skills</span>
        <span onClick={() => navigateURL('projects')} className={activeLink == 'projects' ? 'active' : ''}>Projects</span>
        <span onClick={() => navigateURL('contact')} className={activeLink == 'contact' ? 'active' : ''}>Contact</span>
        <span className="icon" onClick={() => setRenderMobileNav(!renderMobileNav)}>
            <i className="fa fa-bars"></i>
        </span>
    </div>
}

export { Header }