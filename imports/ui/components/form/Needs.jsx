import React, { Component, PropTypes } from 'react';
 
export default class Needs extends Component {
  render() {
    return (
        <div>
            <h2 className="coach">
            "What can I help you with?"
            </h2>
            <h3 className="instructions">select their need(s)</h3>
            <section className="screen1">                
                <div className="needGroup">
                    <input type="checkbox" id="healthNeed" name="healthNeed" />
                    <label htmlFor="healthNeed">
                        <svg viewBox="92 47 84 84" version="1.1"> <defs></defs> <circle className="iconCircle" strokeWidth="3" fillRule="evenodd" cx="134" cy="89" r="40"></circle> <path d="M139.44,83.56 L139.44,73.9999204 C139.44,72.8919411 138.546557,72 137.44444,72 L130.55556,72 C129.450356,72 128.56,72.8953949 128.56,73.9999204 L128.56,83.56 L118.99992,83.56 C117.891941,83.56 117,84.4534425 117,85.5555597 L117,92.4444403 C117,93.5496439 117.895395,94.44 118.99992,94.44 L128.56,94.44 L128.56,104.00008 C128.56,105.108059 129.453443,106 130.55556,106 L137.44444,106 C138.549644,106 139.44,105.104605 139.44,104.00008 L139.44,94.44 L149.00008,94.44 C150.108059,94.44 151,93.5465575 151,92.4444403 L151,85.5555597 C151,84.4503561 150.104605,83.56 149.00008,83.56 L139.44,83.56 Z" stroke="none" className="icon" fillRule="evenodd"></path> </svg>
                        Health
                    </label>
                </div>
                <div className="needGroup">
                    <input type="checkbox" id="financialNeed" name="financialNeed" />
                    <label htmlFor="financialNeed">
                        <svg viewBox="186 47 84 84" version="1.1"> <defs></defs> <circle className="iconCircle" strokeWidth="3" fillRule="evenodd" cx="228" cy="89" r="40"></circle> <path d="M226.188,82.924 C226.188,82.168 226.8,81.88 227.736,81.88 C229.932,81.88 233.856,83.428 236.412,84.832 L239.436,78.496 C237.06,76.984 233.784,75.904 230.436,75.616 L230.436,70 L224.46,70 L224.46,75.976 C220.212,77.02 217.656,79.792 217.656,83.716 C217.656,92.572 230.724,90.412 230.724,93.688 C230.724,94.588 229.932,94.984 228.708,94.984 C226.152,94.984 221.688,93.22 219.096,91.06 L216,97.324 C218.304,99.088 221.364,100.348 224.46,100.924 L224.46,107.044 L230.436,107.044 L230.436,101.284 C235.332,100.78 239.256,98.26 239.256,93.256 C239.256,84.112 226.188,86.092 226.188,82.924 L226.188,82.924 Z" stroke="none" className="icon" fillRule="evenodd"></path> </svg>
                        Financial
                    </label>
                </div>
                <div className="needGroup">
                    <input type="checkbox" id="bedNeed" name="bedNeed" />
                    <label htmlFor="bedNeed">
                        <svg viewBox="281 47 84 84" version="1.1"> <defs></defs> <circle className="iconCircle" strokeWidth="3" fillRule="evenodd" cx="323" cy="89" r="40"></circle> <path d="M309,96 L337,96 L337,102.997715 C337,104.100215 337.89458,105 338.998101,105 L343.001899,105 C344.113294,105 345,104.103546 345,102.997715 L345,74.0022853 C345,72.8997849 344.10542,72 343.001899,72 L338.998101,72 C337.886706,72 337,72.8964537 337,74.0022853 L337,77.5997074 C336.249933,77.2162788 335.400224,77 334.5,77 C331.462434,77 329,79.4624339 329,82.5 C329,83.4002236 329.216279,84.2499326 329.59971,85.0000006 L309,85 L309,80.9970047 C309,79.8949789 308.10542,79 307.001899,79 L302.998101,79 C301.886706,79 301,79.8940894 301,80.9970047 L301,103.002995 C301,104.105021 301.89458,105 302.998101,105 L307.001899,105 C308.113294,105 309,104.105911 309,103.002995 L309,96 Z" stroke="none" className="icon" fillRule="evenodd"></path> </svg>
                        Bed
                    </label>
                </div>
                <div className="needGroup">
                    <input type="checkbox" id="foodNeed" name="foodNeed" />
                    <label htmlFor="foodNeed">
                        <svg viewBox="375 47 84 84" version="1.1"> <defs></defs> <circle className="iconCircle" strokeWidth="3" fillRule="evenodd" cx="417" cy="89" r="40"></circle> <path d="M417.764055,77.5925443 C421.94966,78.5912728 424.309387,82.4489516 423.185332,87.0575745 L417.925053,108.624719 C416.616215,113.990954 414.494485,113.992244 413.185332,108.624719 L411.858303,103.183899 C412.467218,102.553799 413.262031,101.956399 414.293153,101.431016 C417.739107,99.6752147 414.777352,99.888704 411.481362,101.638442 L410.368915,97.0774104 C410.880632,95.6319611 412.005118,94.1115468 414.293153,92.9457346 C418.367414,90.8697948 413.484284,91.5467433 409.68195,94.2608517 L408.568828,89.6970511 C409.146701,87.8625313 410.687602,85.4329606 414.784751,84.8571438 C420.125251,84.1065855 412.438301,82.9201838 407.676898,85.5491675 C407.28849,80.8992684 410.559282,77.3411468 415.555193,77.3411468 C415.70111,77.3411468 415.845557,77.3441825 415.988486,77.3501927 C415.992167,77.280136 415.996284,77.2083995 416.000878,77.1350698 C411.901417,74.5077098 402.936329,68.3411468 409.100471,68.3411468 C413.14601,68.3411468 415.350306,70.9972858 416.53613,73.5658346 C417.406488,70.0263354 419.560302,65.9398811 424.825535,65.10595 C432.581663,63.8775001 422.141826,73.6582637 417.754503,77.5369577 C417.757774,77.5557855 417.760957,77.5743163 417.764055,77.5925443 Z" stroke="none" className="icon" fillRule="evenodd" transform="translate(417.305822, 88.824940) rotate(-45.000000) translate(-417.305822, -88.824940) "></path> </svg>
                        Food
                    </label>
                </div>
                <div className="needGroup">
                    <input type="checkbox" id="safetyNeed" name="safetyNeed" />
                    <label htmlFor="safetyNeed">
                        <svg viewBox="470 47 84 84" version="1.1"> <defs></defs> <circle className="iconCircle" strokeWidth="3" fillRule="evenodd" cx="512" cy="89" r="40"></circle> <path d="M496.000306,75.2528736 C495.964708,75.2528736 506.826172,81.5332031 512.607497,71 C520.007812,80.9335938 528.999985,75.2528736 528.999985,75.2528736 C529.018191,98.2377032 512.500146,108 512.500146,108 C512.500146,108 495.917857,95.878272 496.000306,75.2528736 Z" stroke="none" className="icon" fillRule="evenodd"></path> </svg>
                        Safety
                    </label>
                </div>
            </section>
            
        </div>

        
    );
  }
}