import React, { Component } from 'react'

import autoImg from './auto.png'
import truckImg from './trucks.png'
import stevieImg from './shopstevie.png'
import noIconImg from './noicon.png'
import { textStyles, cardStyles, containerStyles } from './projects.styles'


class Projects extends Component {

    renderProjects = (projects) => {
        return projects.map((pro) => {
            return <div {...cardStyles} onClick={() => pro.link ? window.open(pro.link) : ''}>
                {(pro.name == 'Brutus' || pro.name == 'EBankart') ? 
                    <i className="fa fa-image"></i> : 
                    <img src={pro.icon} alt="Avatar" />}
                <div {...textStyles}>
                    <h4><b>{pro.name}</b></h4>
                    <p>{pro.description}</p>
                </div>
            </div>
        })
    }

    render() {
        const projects = [
            {
                icon: noIconImg,
                name: 'AMEX - One Amex',
                link: '',
                description: 'A cost efficient and high performant Consumer Servicing Tool (Company: Infosys)'
            },
            {
                icon: noIconImg,
                name: 'BoFA - Climate Risk',
                link: '',
                description: 'A project aiming towards Zero Finance Emission (Company: Infosys)'
            },
            {
                icon: noIconImg,
                name: 'Brutus',
                link: '',
                description: 'A synthesized version of Traffic model (Company: Ramboll)'
            },
            {
                icon: autoImg,
                name: 'Auto',
                link: 'https://www.auto.com/',
                description: 'Auto is a platform where users buy new/used cars (Company: American Cybersystems)'
            },
            {
                icon: truckImg,
                name: 'Pickup Trucks',
                link: 'https://www.pickuptrucks.com/',
                description: 'Auto is a platform where users buy new/used trucks (Company: American Cybersystems)'
            },
            {
                icon: stevieImg,
                name: 'Shop Stevie',
                link: 'https://shopstevie.com/',
                description: 'A fashion E-Commerce Store (Company: American Cybersystems)'
            },
            {
                icon: noIconImg,
                name: 'EBankart',
                link: '',
                description: 'A rewards program based on local store bills (Company: NEW HORIZONS CYBERSOFT LTD)'
            },
            {
                icon: noIconImg,
                name: 'Tasker',
                link: '',
                description: 'An events and task tracker in an organization. (Company: NEW HORIZONS CYBERSOFT LTD)'
            }
        ]
        return <div {...containerStyles} id={'projects'}>
            {this.renderProjects(projects)}
        </div>
    }
}

export { Projects }