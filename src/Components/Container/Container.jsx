import React from 'react';
import './Container.scss';
import metropolia from '../../Media/metropolia.mp4'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage';
import StreamPlayer from '../StreamPlayer/StreamPlayer';

const Container=()=> {
  return (<Router>
      <div className="Container">
          <video id="myVideo" loop autoPlay muted>
              <source src={metropolia} type="video/mp4"/>
          </video>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Single" component={StreamPlayer} />

      </div>
  </Router>
  );
}

export default Container;