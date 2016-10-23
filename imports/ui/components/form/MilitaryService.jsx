import React, { Component, PropTypes } from 'react';
 
export default class BasicInfo extends Component {
  render() {
    return (
        <div>
            <h2 className="coach">“We need some info about your military service.”</h2>
            <div className="row">
                <div className="small-6 columns">
                    <label htmlFor="serviceStart">Service Start
                        <input name="serviceStart" type="number" pattern="[\d]{4}" placeholder="YYYY" />
                    </label>
                </div>
                <div className="small-6 columns">
                    <label htmlFor="serviceEnd">Service End
                        <input name="serviceEnd" type="number" pattern="[\d]{4}" placeholder="YYYY" />
                    </label>
                </div>
                <div className="small-12 columns">
                    <label htmlFor="veteranOf">Veteran Of
                        <select name="veteranOf">
                            <option value="">Select One</option>
                            <option value="WorldWarII">World War II</option>
                            <option value="KoreanWar">Korean War</option>
                            <option value="VietnamWar">Vietnam War</option>
                            <option value="DesertStorm">Desert Storm</option>
                            <option value="AfghanistanOEF">Afghanistan</option>
                            <option value="IraqOIF">Iraq OIF</option>
                            <option value="IraqOND">Iraq OND</option>
                            <option value="OtherTheater">Other Theater</option>
                        </select>
                    </label>
                </div>
                <div className="small-12 columns">
                    <label htmlFor="veteranOf">Disharge Status
                        <select name="veteranOf">
                            <option value="0">Select One</option>
                            <option value="1">Honorable Discharge</option>
                            <option value="2">Other Than Honorable Conditions Discharge</option>
                            <option value="3">Bad Conduct Discharge (BCD)</option>
                            <option value="4">Dishonorable Discharge</option>
                            <option value="5">Officer Discharge</option>
                            <option value="6">Entry Level Separation (ELS)</option>
                        </select>
                    </label>
                </div>
            </div>

        </div>
    );
  }
}