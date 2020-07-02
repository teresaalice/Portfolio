import React, { Component } from "react";
import SOCIAL_PROFILES from "./data/socialprofiles";

class SocialProfile extends Component {
  render() {
    const { title, image, link } = this.props.socialProfile;
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
          {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => {
            return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles