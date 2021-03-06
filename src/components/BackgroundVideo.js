import React, { Component } from 'react';
import myvideo from '../videos/bg-video.mp4';
import './stylesheets/BackgroundVideo.css';

class BackgroundVideo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoURL: myvideo
    };
  }

  render() {
    return (
        <video id="bg-video" loop autoPlay>
          <source src={this.state.videoURL} type='video/mp4'/>
          <source src={this.state.videoURL} type='video/ogg'/>
        </video>
    );
  }

}

export default BackgroundVideo;
