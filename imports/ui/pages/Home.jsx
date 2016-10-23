import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Clients } from './../../api/clients.js'; 

/* SVG ---- */
import samaritanLogo from './../svg/samaritanLogo.jsx';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
   handleSubmit(ev){
    ev.preventDefault();
    var el = ev.target;
    console.log(ev);
    var _this = this;
    setTimeout(function(){
          if ($(el).find('[data-invalid]').length == 0 ) {
              window.location = "/register"; 
          } else {
            console.log('Form not valid');
          }
      }, 200);

  }
  render() {
    return (
      <div className="container home">
        <div>
            <div className="row column text-center">
                <svg className="logo" viewBox="0 0 45 50" >
                    <g id="Exploration" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Home" transform="translate(-165.000000, -83.000000)" fill="#FFFFFF">
                            <g id="Group-8" transform="translate(165.000000, 83.000000)">
                                <path d="M0.000417876929,5.74712644 C-0.048125002,5.74712644 13.920388,7.59445717 22.6465865,0 C32.0975902,7.59445717 44.9999795,5.74712644 44.9999795,5.74712644 C45.0248055,36.807707 22.5001987,50 22.5001987,50 C22.5001987,50 -0.112012542,33.6192865 0.000417876929,5.74712644 Z M4.16952833,8.77923107 C4.12998032,8.77923107 15.5101665,10.3080565 22.6194244,4.02298851 C30.3191832,10.3080565 40.8307954,8.77923107 40.8307954,8.77923107 C40.8510212,34.4845391 22.5001619,45.4022989 22.5001619,45.4022989 C22.5001619,45.4022989 4.07793096,31.8458463 4.16952833,8.77923107 Z M22.8800651,12.4425287 C18.146345,12.4425287 14.9613111,14.7413793 14.9613111,18.3908046 C14.9613111,25.5172414 25.8605556,23.3045977 25.8605556,27.0977011 C25.8605556,28.3333333 24.7209563,29.0229885 22.8216241,29.0229885 C20.6593075,29.0229885 17.6788171,27.8448276 15.5749415,26.0057471 L13.7340503,29.7126437 C16.0424694,31.637931 19.4028263,32.9022989 22.7631831,32.9022989 C27.2923598,32.9022989 30.7695986,30.7758621 30.7695986,26.8390805 C30.7988191,19.5977011 19.8995747,21.6666667 19.8995747,17.9597701 C19.8995747,16.8678161 20.9515125,16.3218391 22.5001987,16.3218391 C24.1365464,16.3218391 26.7079499,17.1264368 28.8702665,18.3908046 L30.6527167,14.6264368 C28.607282,13.3045977 25.7436736,12.4425287 22.8800651,12.4425287 Z" id="Combined-Shape"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                <h1>You can be the Good Samaritan</h1>
                <section className="signup">
                  <h3>Get started today!</h3>
                  <form data-abide onSubmit={ this.handleSubmit }>
                    <p>Enter your email address associated with your organization</p>
                    <label htmlFor="email">
                      Email
                      <input type="email" name="email" pattern="^[\S]+@(mercy.net|slpl.org|slps.org|slmpd.org|stpatrickcenter.org)$" />
                      <button href="" className="button expanded">Get Started</button>
                    </label>
                  </form>
                </section>
                <section className="partners">
                  <h2>Our Partners</h2>
                  <img src="/images/mercy.png" className="small-5" />
                  <div className="row">
                    <img src="/images/stlPL.png" className="small-4 " />
                    <img src="/images/SLPS.png" className="small-3 " />
                  </div>
                  <img src="/images/SLPD.png" className="small-2" />
                  <img src="/images/saintPatrickCenter.png" className="small-3" />
                </section>
                <section className="about">
                Samaritan is a national program that supports the community by matching an individual's needs with supportive programs and housing. Displaying a blue and white Samaritan sign at trusted community locations symbolizes a safe and non-judgmental place to seek help. Locations include hospitals, libraries, shelters, police stations, religious organizations and local schools and colleges. Whether you are in fear of becoming homeless or are already part of the homeless community, a Samaritan organization is always open to help.
                </section>
            </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};
 
export default createContainer(() => {
  return {};
}, Home);