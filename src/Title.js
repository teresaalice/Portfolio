import React, { Component } from "react";

const TITLES = ["goth", "a player", "a learner"];

class Title extends Component {
  state = { titleIndex: 0 };

  componentDidMount(){    
    this.animateTitles();
  }

  componentWillUnmount(){  
    clearInterval(this.titleInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex: titleIndex});
    }, 2000)
  }

  render() {
    const title = TITLES[this.state.titleIndex];


    return <p>I am {title}</p>;
  }
}

export default Title;
