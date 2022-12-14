import React, {Component} from 'react'
import resumeDetailed from './Resume-Detailed.pdf'
import resumeOverview from './Resume-Overview.pdf'
import { heroStyles, imgStyles, textStyles, downloadStyles } from './hero.styles'

class Hero extends Component {
    render () {
        return <div {...heroStyles} id={'home'}>
            <div {...textStyles}>
                <div>
                    <i className={"fa fa-quote-left"}></i>
                    <div>
                        In my past experience, I’ve developed multiple Web Based and Mobile based good reputed projects. Projects like Cars.com, ShopStevie.com, Pickuptrucks.com, Auto.com and other Products like Brutus (a traffic model simulation) etc. I am progressive minded and in tune with new development in my field. I have proven to be effective in terms of communication and collaborative with strong problem-solving talents.
                    </div>
                    <i className={"fa fa-quote-right"}></i>
                </div>
                <div {...downloadStyles} onClick={() => {return window.location.assign(resumeDetailed)}}>Resume Detailed</div>
                <div {...downloadStyles} onClick={() => {return window.location.assign(resumeOverview)}}>Resume Overview</div>
            </div>
            <div {...imgStyles}>
            </div>
        </div>
    }
}

export {Hero}