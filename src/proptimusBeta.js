import React from 'react';

export default class ProptimusBeta extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    console.log(this.props.catchPhrase)
    return(
      <section>
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
