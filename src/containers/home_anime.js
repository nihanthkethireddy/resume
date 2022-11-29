import React, { Component } from "react";
import Anime, {anime} from 'react-anime';
import { fadeInUp } from 'react-animations';
import Typist from "react-typist";

class DynamicTypist extends Component {
    render() {
        let colors = [ 'blue', 'green', 'red' ];
        return (
            // <Typist>
            //     <Typist.Delay ms={1000} />
            //         <span>Hi...</span>
            //         <Typist.Backspace count={5} delay={1000} />
            //         <span>This is Nihanth Reddy</span>
            //         <Typist.Backspace count={21} delay={1000} />
            // </Typist>

    //         <Anime easing="easeOutElastic"
    //        loop={true}
    //        duration={1000}
    //        direction="alternate"
    //        delay={(el, index) => index * 240}
    //        translateX='13rem'
    //        scale={[.75, .9]}>
    //     <div className="blue"/>
    //     <div className="green"/>
    //     <div className="red"/>
    //   </Anime>

<Anime delay={anime.stagger(100)} scale={[ 0.1, 0.9 ]}>
        {colors.map((color, i) => <div key={i} className={color} />)}
    </Anime>
        );
    }
}

export { DynamicTypist }