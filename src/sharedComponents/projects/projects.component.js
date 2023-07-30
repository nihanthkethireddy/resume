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
                {!pro.icon ? 
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
                icon: '',
                name: 'AMEX - One Amex',
                link: '',
                description: 'A cost efficient and high performant Consumer Servicing Tool (Company: Infosys)'
            },
            {
                icon: '',
                name: 'BoFA - Climate Risk',
                link: '',
                description: 'A project addressing environmental concerns and aiming towards Zero Finance Emission (Company: Infosys)'
            },
            {
                icon: '',
                name: 'Brutus',
                link: '',
                description: 'A synthesized version of Traffic model that projects enviromental statistics and traffic dissipation (Company: Ramboll)'
            },
            {
                icon: autoImg,
                name: 'Auto',
                link: 'https://www.auto.com/',
                description: 'Auto is a platform where users buy new/used cars and the website also contains articles related to automotives (Company: American Cybersystems)'
            },
            {
                icon: truckImg,
                name: 'Pickup Trucks',
                link: 'https://www.pickuptrucks.com/',
                description: 'Picktrucks is a platform where users buy new/used trucks and the website also contains articles related to trucks (Company: American Cybersystems)'
            },
            {
                icon: stevieImg,
                name: 'Shop Stevie',
                link: 'https://shopstevie.com/',
                description: 'A fashion E-Commerce Store which deals to clothing and accessories (Company: American Cybersystems)'
            },
            {
                icon: '',
                name: 'EBankart',
                link: '',
                description: 'A rewards program based on bills of any local store (Company: NEW HORIZONS CYBERSOFT LTD)'
            },
            {
                icon: '',
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