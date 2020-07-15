import React from 'react';
import './App.css';
import Proptimus from "./Proptimus"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      catchPhrases: {
        "Proptimus Prime": "SPORTS",
        "Proptimus Beta": "2nd Best",
        "Proptimus Omega": "I'm the worst"
      },
      activeProp: ""
    }
  }


  callForBadHelp = (event) => {
    this.setState({
      activeProp: "Proptimus Omega"
    })
  }

  callForBetterHelp = (event) => {
    this.setState({
      activeProp: "Proptimus Beta"
    })
  }

  gimmeAllYouGot = (event) => {
    this.setState({
      activeProp: "Proptimus Prime"
    })
  }

  sendThemHome = (event) => {
    console.log("Strirring Speech")
  }

  checkWhichPropActice = (event) => {
    if(this.state.activeProp === "") {
      this.callForBadHelp(event)
    } else if(this.state.activeProp === "Proptimus Omega") {
      this.callForBetterHelp(event)
    } else if(this.state.activeProp === "Proptimus Beta"){
      this.gimmeAllYouGot(event)
    } else {
      this.sendThemHome(event)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            onClick={this.checkWhichPropActice}
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
          />

          <>
            <p className="">Will this do, human?</p>
            <Proptimus activeProp={this.state.activeProp} src={this.state.proptimusPhotos[this.state.activeProp]} catchPhrase={this.state.catchPhrases[this.state.activeProp]} />
          </>

        </header>
      </div>
    );
  }
}
