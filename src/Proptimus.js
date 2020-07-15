import React from "react"
import ProptimusOmega from "./proptimusOmega"
import ProptimusBeta from "./proptimusBeta"
import ProptimusPrime from "./proptimusPrime"

export default function proptimus(props) {

    if(props.activeProp === "Proptimus Omega") {
        return(
            <ProptimusOmega src={props.src} catchPhrase={props.catchPhrase}/>
        )
    } else if(props.activeProp === "Proptimus Beta") {
        return(
            <ProptimusBeta src={props.src} catchPhrase={props.catchPhrase}/>
        )
    } else if(props.activeProp === "Proptimus Prime") {
        return(
            <ProptimusPrime src={props.src} catchPhrase={props.catchPhrase}/>
        )
    } else {
        return null
    }
}