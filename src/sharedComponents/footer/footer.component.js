import React, { Component } from 'react'
import { footerStyles, linkStyles, copyrightStyles, contactStyles } from './footer.styles'


class Footer extends Component {
    render() {
        return <div {...footerStyles}>
            <div {...linkStyles}>
                <i class="fa fa-github"></i>
                <i class="fa fa-linkedin"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-envelope"></i>
            </div>
            <div {...contactStyles}>
                <span>Designed and Developed by</span>
                <div>
                    <span>Kethireddy Nihanth Kumar Reddy</span>
                    <span>(469) 514 - 4532</span>
                    <span>nihanth.kethireddy@gmail.com</span>
                </div>
            </div>
            <div {...copyrightStyles}>
                <span><i class="fa fa-copyright"></i> All Rights Reserved | 2022</span>
            </div>
        </div>
    }
}

export { Footer }