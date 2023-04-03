import React, { Component } from 'react'
import { footerStyles, linkStyles, copyrightStyles, contactStyles } from './footer.styles'


class Footer extends Component {

    navigateURL = (platform) => {
        if (platform == 'github') {
            return window.open('https://github.com/nihanthkethireddy')
        } else if (platform == 'linkedin') {
            return window.open('https://www.linkedin.com/in/nihanth-kumar-reddy-kethireddy-685b84187/')
        } else if (platform == 'instagram') {
            return window.open('https://www.instagram.com/nihanth_reddy/')
        } else if (platform == 'facebook') {
            return window.open('https://www.facebook.com/nihanth.reddy.1/')
        } else if (platform == 'mail') {
            return window.open('mailto:nihanth.kethireddy@gmail.com?subject=SendMail&body=Description')
        }
    }

    render() {
        return <div {...footerStyles} id={'contact'}>
            <div {...linkStyles}>
                <i class="fa fa-github" onClick={() => this.navigateURL('github')}></i>
                <i class="fa fa-linkedin" onClick={() => this.navigateURL('linkedin')}></i>
                <i class="fa fa-instagram" onClick={() => this.navigateURL('instagram')}></i>
                <i class="fa fa-facebook" onClick={() => this.navigateURL('facebook')}></i>
                <i class="fa fa-envelope" onClick={() => this.navigateURL('mail')}></i>
            </div>
            <div {...contactStyles}>
                <span>Designed and Developed by</span>
                <div>
                    <span>Kethireddy Nihanth Kumar Reddy</span>
                    <span onClick={'tel: +1-469-514-4532'}>(469) 514 - 4532</span>
                    {/* <span>nihanth.kethireddy@gmail.com</span> */}
                </div>
            </div>
            <div {...copyrightStyles}>
                <span><i class="fa fa-copyright"></i> All Rights Reserved | 2023</span>
            </div>
        </div>
    }
}

export { Footer }