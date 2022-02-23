import React, { Component } from 'react'
import { skillsStyles, skillsContainerStyles } from './skills.styles'


class Skills extends Component {

    displaySkills = () => {
        const skills = {
            'HTML': 5,
            'CSS': 5,
            'Javascript': 5,
            'Typescript': 5,
            'React JS': 5,
            'Node JS': 5,
            'SEO': 5,
            'Performance Analysis': 5,
            'Ruby on Rails': 5,
            'C++': 5,
            'AWS': 5,
            'Azure': 5,
            'Circle CI': 5,
            'Prismic': 5,
            'Adobe Analytics': 5,
            'Google Analytics': 5,
            'Jenkins': 5,
            'Graph QL': 5,
            'Mapbox GL': 5,
            'Docker': 5,
            'SQL': 5,
        }

        return Object.keys(skills).map((skill) => <div {...skillsStyles(skills[skill])}>{skill}</div>)
    }

    render() {
        return <div {...skillsContainerStyles}>{this.displaySkills()}</div>
    }
}

export { Skills }