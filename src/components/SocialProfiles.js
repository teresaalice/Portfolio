import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = (props) => {
  const { title, link, image } = props.socialProfile;
  return (
    <span>
      <a href={link}>
        <img
          src={image}
          alt={title}
          style={{ width: 35, height: 35, margin: 10 }}
        />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div>
    <h4>Reach out</h4>
    <div>
      {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => {
        return (
          <SocialProfile
            key={SOCIAL_PROFILE.id}
            socialProfile={SOCIAL_PROFILE}
          />
        );
      })}
    </div>
  </div>
);

export default SocialProfiles;
