import React, { Component } from "react";
// import { Feedback } from "../sharedComponents/feedback";
import { Footer } from "../sharedComponents/footer";
import { Header } from "../sharedComponents/header/header.component";
import { Hero } from "../sharedComponents/hero/hero.component";
// import { Pictures } from "../sharedComponents/pictures";
import { Projects } from "../sharedComponents/projects";
import { Skills } from "../sharedComponents/skills";
import { homeStyles } from "./home.styles";

export class Home extends Component {
    render () {
        return <div {...homeStyles}>
            <Header />
            <Hero />
            <Skills />
            <Projects />
            {/* <Feedback /> */}
            {/* <Pictures /> */}
            <Footer />
        </div>
    }
}