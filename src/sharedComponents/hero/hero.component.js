import React, { Component } from 'react'
import resumeDetailed from './Resume-Detailed.pdf'
import resumeOverview from './Resume-Overview.pdf'
import { heroStyles, imgStyles, textStyles, downloadStyles } from './hero.styles'

class Hero extends Component {
    render() {
        return <div {...heroStyles} id={'home'}>
            <div {...textStyles}>
                <div>
                    <i className={"fa fa-quote-left"}></i>
                    <div>
                        Imagine having an experienced ReactJS and NodeJS Developer with over 8 years of professional experience working in the exciting world of E-Commerce!  He is a pro in developing web applications using HTML, CSS, JavaScript, React JS, and Redux architecture. He also has a wide range of expertise in testing frameworks, version control tools, and bug tracking tools. He has even worked with cloud technologies like AWS and CMS like Prismic and Typepad. In addition, he is well-versed in RESTful and SOAP web services, SQL, and stored procedures. With excellent communication and interpersonal skills, he works well as part of a team or individually. You don't want to miss out on having this skilled developer on your team!
                    </div>
                    <i className={"fa fa-quote-right"}></i>
                </div>
                {/* <div {...downloadStyles} onClick={() => {return window.location.assign(resumeDetailed)}}>Resume</div> */}
                {/* <div {...downloadStyles} onClick={() => {return window.location.assign(resumeOverview)}}>Resume Overview</div> */}
            </div>
            <div {...imgStyles}>
            </div>
        </div>
    }
}

export { Hero }