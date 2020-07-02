import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile_icon.png"

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    console.log("toggleDisplayBio this", this);
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt='Profile' className='profile'/>
        <h1> Hello! </h1>
        <p>My name is Teresa!</p>
        {this.state.displayBio ? (
          <div>
            <p>I'm learning React!</p>
            <p>I'm 27 and I live in Vancouver.</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Show more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
