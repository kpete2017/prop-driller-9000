import React from 'react';

export default class ProptimusPrime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    console.log(this.props.activeProp)
    return(
      <section>
           <p className="">There are no bigger guns</p>
        <img
          src={this.props.src}
          className="App-logo"
          alt="logo"
          onClick={this.props.callForBetterHelp}
        />
        <p>{this.props.catchPhrase}</p>
      </section>
    )
  }
}
