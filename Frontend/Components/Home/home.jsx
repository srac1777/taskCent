import React from 'react';
import { withRouter, Link } from 'react-router-dom';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render (){
    return (
      <div className = 'home-page' >
        <div className='splash-zone'>
          <div className='splash-background' >
            <div className='homepage-title-text-container'>
              <div className='homepage-title-text'>TaskCent</div>
              <div className="splash-divider"></div>
              <div className='right-splash-text'>
                  <div className='homepage-title-subtext'> Get paid to do work.</div>
                  <div className='homepage-title-subtext'> Get paid to refer.</div>
                  <div className='homepage-title-subtext'> Or both.</div>
              </div>
              
            </div>
            <div className='homepage-title-subtext2'>
              <Link className='get-started-button' to="/index">Get Started</Link>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
