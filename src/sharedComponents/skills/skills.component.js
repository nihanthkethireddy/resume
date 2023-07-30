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
            'SEO': 3,
            'Performance Audit': 3,
            'Jira': 4,
            'Ruby on Rails': 1,
            'C++': 3,
            'AWS': 3,
            'Azure': 3,
            'Circle CI': 3,
            'Prismic': 5,
            'Typepad': 3,
            'Adobe Analytics': 3,
            'Google Analytics': 3,
            'Jenkins': 3,
            'Graph QL': 5,
            'Mapbox GL': 5,
            'Docker': 3,
            'SQL': 5,
            'React Native': 3,
            'Android': 1,
            'Razzle': 5,
            'LightHouse': 3,
            'Hotjar': 3,
            'Zeplin': 3,
            'Express': 5
        }

        return Object.keys(skills).map((skill) => <div {...skillsStyles(skills[skill])}>{skill}</div>)
    }

    render() {
        return <div {...skillsContainerStyles} id={'skills'}>{this.displaySkills()}</div>
    }
}

export { Skills }