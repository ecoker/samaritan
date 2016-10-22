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
                        <svg viewBox="261 310 133 132" version="1.1"> <desc>Created with Sketch.</desc> <defs></defs> <path d="M373.297314,330.051217 C347.938525,304.692428 306.823805,304.692428 281.465016,330.051217 C256.106227,355.410006 256.106227,396.524727 281.465016,421.883516 C306.823805,447.242305 347.938525,447.242305 373.297314,421.883516 C398.656104,396.524727 398.656104,355.410006 373.297314,330.051217 Z" id="Stroke-46"  strokeWidth="2" fill="#EEEEEE" fillRule="evenodd"></path> <path d="M282.612954,421.883561 L373.304615,331.1919" id="Stroke-48"  strokeWidth="2" strokeLinecap="square" fill="none"></path> <path d="M373.29731,421.883583 L282.605649,331.191922" id="Stroke-50"  strokeWidth="2" strokeLinecap="square" fill="none"></path> </svg>
                        Health
                    </label>
                </div>
                <div className="needGroup">
                    <input type="checkbox" id="financialNeed" name="financialNeed" />
                    <label htmlFor="financialNeed">
                        <svg viewBox="261 310 133 132" version="1.1"> <desc>Created with Sketch.</desc> <defs></defs> <path d="M373.297314,330.051217 C347.938525,304.692428 306.823805,304.692428 281.465016,330.051217 C256.106227,355.410006 256.106227,396.524727 281.465016,421.883516 C306.823805,447.242305 347.938525,447.242305 373.297314,421.883516 C398.656104,396.524727 398.656104,355.410006 373.297314,330.051217 Z" id="Stroke-46"  strokeWidth="2" fill="#EEEEEE" fillRule="evenodd"></path> <path d="M282.612954,421.883561 L373.304615,331.1919" id="Stroke-48"  strokeWidth="2" strokeLinecap="square" fill="none"></path> <path d="M373.29731,421.883583 L282.605649,331.191922" id="Stroke-50"  strokeWidth="2" strokeLinecap="square" fill="none"></path> </svg>
                        Financial
                    </label>
                </div>
                <div className="needGroup">
                    <input type="checkbox" id="bedNeed" name="bedNeed" />
                    <label htmlFor="bedNeed">
                        <svg viewBox="261 310 133 132" version="1.1"> <desc>Created with Sketch.</desc> <defs></defs> <path d="M373.297314,330.051217 C347.938525,304.692428 306.823805,304.692428 281.465016,330.051217 C256.106227,355.410006 256.106227,396.524727 281.465016,421.883516 C306.823805,447.242305 347.938525,447.242305 373.297314,421.883516 C398.656104,396.524727 398.656104,355.410006 373.297314,330.051217 Z" id="Stroke-46"  strokeWidth="2" fill="#EEEEEE" fillRule="evenodd"></path> <path d="M282.612954,421.883561 L373.304615,331.1919" id="Stroke-48"  strokeWidth="2" strokeLinecap="square" fill="none"></path> <path d="M373.29731,421.883583 L282.605649,331.191922" id="Stroke-50"  strokeWidth="2" strokeLinecap="square" fill="none"></path> </svg>
                        Bed
                    </label>
                </div>
                <div className="needGroup">
                    <input type="checkbox" id="foodNeed" name="foodNeed" />
                    <label htmlFor="foodNeed">
                        <svg viewBox="261 310 133 132" version="1.1"> <desc>Created with Sketch.</desc> <defs></defs> <path d="M373.297314,330.051217 C347.938525,304.692428 306.823805,304.692428 281.465016,330.051217 C256.106227,355.410006 256.106227,396.524727 281.465016,421.883516 C306.823805,447.242305 347.938525,447.242305 373.297314,421.883516 C398.656104,396.524727 398.656104,355.410006 373.297314,330.051217 Z" id="Stroke-46"  strokeWidth="2" fill="#EEEEEE" fillRule="evenodd"></path> <path d="M282.612954,421.883561 L373.304615,331.1919" id="Stroke-48"  strokeWidth="2" strokeLinecap="square" fill="none"></path> <path d="M373.29731,421.883583 L282.605649,331.191922" id="Stroke-50"  strokeWidth="2" strokeLinecap="square" fill="none"></path> </svg>
                        Food
                    </label>
                </div>
                <div className="needGroup">
                    <input type="checkbox" id="safetyNeed" name="safetyNeed" />
                    <label htmlFor="safetyNeed">
                        <svg viewBox="261 310 133 132" version="1.1"> <desc>Created with Sketch.</desc> <defs></defs> <path d="M373.297314,330.051217 C347.938525,304.692428 306.823805,304.692428 281.465016,330.051217 C256.106227,355.410006 256.106227,396.524727 281.465016,421.883516 C306.823805,447.242305 347.938525,447.242305 373.297314,421.883516 C398.656104,396.524727 398.656104,355.410006 373.297314,330.051217 Z" id="Stroke-46"  strokeWidth="2" fill="#EEEEEE" fillRule="evenodd"></path> <path d="M282.612954,421.883561 L373.304615,331.1919" id="Stroke-48"  strokeWidth="2" strokeLinecap="square" fill="none"></path> <path d="M373.29731,421.883583 L282.605649,331.191922" id="Stroke-50"  strokeWidth="2" strokeLinecap="square" fill="none"></path> </svg>
                        Safety
                    </label>
                </div>
            </section>
        </div>

        
    );
  }
}