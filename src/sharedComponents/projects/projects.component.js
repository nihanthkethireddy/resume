import React, { Component } from 'react'

import autoImg from './auto.png'
import truckImg from './trucks.png'
import stevieImg from './shopstevie.png'
import noIconImg from './noicon.png'
import { textStyles, cardStyles, containerStyles } from './projects.styles'


class Projects extends Component {

    renderProjects = (projects) => {
        return projects.map((pro) => {
            return <div {...cardStyles}>
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
                icon: autoImg,
                name: 'Auto',
                description: 'Auto Description'
            },
            {
                icon: truckImg,
                name: 'Pickup Trucks',
                description: 'Pickup Trucks Description'
            },
            {
                icon: stevieImg,
                name: 'Shop Stevie',
                description: 'Shop Stevie Description'
            },
            {
                icon: noIconImg,
                name: 'Brutus',
                description: 'Brutus Description'
            },
            {
                icon: noIconImg,
                name: 'EBankart',
                description: 'Ebankart Description'
            }
        ]
        return <div {...containerStyles}>
            {this.renderProjects(projects)}
        </div>
    }
}

export { Projects }