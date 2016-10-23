import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Clients } from './../../api/clients.js'; 

/* TEMPLATE SECTIONS ---- */
import Header from './../template/Header.jsx';
import Footer from './../template/Footer.jsx';

/* SVG ---- */
import samaritanLogo from './../svg/samaritanLogo.jsx';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
 
  render() {
    return (
      <div className="container home">
        <Header />
        <div className="main-callout">
            <div className="row column text-center">
                <svg width="45px" height="50px" viewBox="0 0 45 50" >
                    <g id="Exploration" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Home" transform="translate(-165.000000, -83.000000)" fill="#FFFFFF">
                            <g id="Group-8" transform="translate(165.000000, 83.000000)">
                                <path d="M0.000417876929,5.74712644 C-0.048125002,5.74712644 13.920388,7.59445717 22.6465865,0 C32.0975902,7.59445717 44.9999795,5.74712644 44.9999795,5.74712644 C45.0248055,36.807707 22.5001987,50 22.5001987,50 C22.5001987,50 -0.112012542,33.6192865 0.000417876929,5.74712644 Z M4.16952833,8.77923107 C4.12998032,8.77923107 15.5101665,10.3080565 22.6194244,4.02298851 C30.3191832,10.3080565 40.8307954,8.77923107 40.8307954,8.77923107 C40.8510212,34.4845391 22.5001619,45.4022989 22.5001619,45.4022989 C22.5001619,45.4022989 4.07793096,31.8458463 4.16952833,8.77923107 Z M22.8800651,12.4425287 C18.146345,12.4425287 14.9613111,14.7413793 14.9613111,18.3908046 C14.9613111,25.5172414 25.8605556,23.3045977 25.8605556,27.0977011 C25.8605556,28.3333333 24.7209563,29.0229885 22.8216241,29.0229885 C20.6593075,29.0229885 17.6788171,27.8448276 15.5749415,26.0057471 L13.7340503,29.7126437 C16.0424694,31.637931 19.4028263,32.9022989 22.7631831,32.9022989 C27.2923598,32.9022989 30.7695986,30.7758621 30.7695986,26.8390805 C30.7988191,19.5977011 19.8995747,21.6666667 19.8995747,17.9597701 C19.8995747,16.8678161 20.9515125,16.3218391 22.5001987,16.3218391 C24.1365464,16.3218391 26.7079499,17.1264368 28.8702665,18.3908046 L30.6527167,14.6264368 C28.607282,13.3045977 25.7436736,12.4425287 22.8800651,12.4425287 Z" id="Combined-Shape"></path>
                            </g>
                        </g>
                    </g>
                    </svg>
                <h1>You can be the Good Samaritan</h1>
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