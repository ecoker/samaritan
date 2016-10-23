import React, { Component, PropTypes } from 'react';
 
export default class BasicInfo extends Component {
  render() {
    return (
        <div>
            <h2 className="coach">“Now we need some info about you.”</h2>
            <section className="screen2">
                <label className="photoGroup" htmlFor="uploadPhoto">
                    <svg width="112px" height="112px" viewBox="317 132 112 112" version="1.1"><desc>Created with Sketch.</desc> <defs></defs> <g id="Group-123" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(318.000000, 133.000000)"> <path d="M55,110 C85.37566,110 110,85.37566 110,55 C110,24.62434 85.37566,0 55,0 C24.62434,0 0,24.62434 0,55 C0,85.37566 24.62434,110 55,110 L55,110 Z" id="Stroke-119" stroke="#979797"></path> <text id="Take-a-" fontFamily="HelveticaNeue, Helvetica Neue" fontSize="16" fontWeight="normal" letterSpacing="-1.776" fill="#9B9B9B"> <tspan x="31" y="52">T</tspan> <tspan x="36.632" y="52">ake a </tspan> </text> <text id="photo" fontFamily="HelveticaNeue, Helvetica Neue" fontSize="16" fontWeight="normal" fill="#9B9B9B"> <tspan x="33" y="70">photo</tspan> </text> </g> </svg> 
                    <input type="file" id="uploadPhoto" />
                </label>
                <div className="row">
                    <div className="small-10 columns">
                        <label htmlFor="firstName">First Name
                            <input name="firstName" type="text" required pattern="[a-zA-Z]+" placeholder="Jane" />
                        </label>
                    </div>
                    <div className="small-2 columns">
                        <label htmlFor="middleName">MI
                            <input name="middleName" type="text" pattern="[a-zA-Z]+" placeholder="A" />
                        </label>
                    </div>
                    <div className="small-12 columns">
                        <label htmlFor="lastName">Last Name
                            <input name="lastName" type="text" required pattern="[a-zA-Z]+" placeholder="Doe" />
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <label htmlFor="socialSecurity">Social Security
                            <input name="socialSecurity" type="number" pattern="[\d]+" placeholder="0001231234" />
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <label htmlFor="dateOfBirth">Date of Birth
                            <input name="dateOfBirth" type="date" pattern="[\d{2}.*\d{2}.*\d{4}]" placeholder="MM/DD/YYYY" />
                        </label>
                    </div>
                    <fieldset className="columns small-12">
                        <legend>Gender</legend> 
                        <label htmlFor="genderMale" className="columns small-4">
                            <input type="radio" name="gender" value="male" id="genderMale" /> Male
                        </label>
                        <label htmlFor="genderFemale" className="columns small-4">
                            <input type="radio" name="gender" value="female" id="genderFemale" /> Female
                        </label>
                        <label htmlFor="genderCustom" className="columns small-4">
                            <input type="radio" name="gender" value="custom" id="genderCustom" /> Custom
                        </label>
                    </fieldset>
                </div>
            </section>
        </div>
    );
  }
}