import React from 'react';
import "./LandingPage.scss"
import {Link} from 'react-router-dom'

const LandingPage =()=>{

    return (
        <div className="LandingPageContainer">
          <Link  to="/single"><button>To stream</button></Link>
        </div>
    );
  }

export default LandingPage;