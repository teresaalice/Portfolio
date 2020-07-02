import React, { Component } from "react";
import SOCIALPROFILES from "./data/socialprofiles";

class SocialProfile extends Component {
  render() {
    const { title, image, link } = this.props.socialprofile;
    return (
      <div style={{ display: "inline", width: 36, height: 36, margin: 8 }}>
        <a href={link}><img src={image} alt={title} /></a>
      </div>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h4>Reach out</h4>
        <div>
          {SOCIALPROFILES.map((SOCIALPROFILE) => {
            return <SocialProfile key={SOCIALPROFILE.id} socialprofile={SOCIALPROFILE} />;
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles