import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

/*
// TEMPLATE SECTIONS
*/
import Header from './../template/Header.jsx';
import Footer from './../template/Footer.jsx';

export default class About extends Component {
  render() {
    return (
        <div className="container">
            <Header />
            <div className="row column">
                <table>
                    <thead>
                        <tr>
                            <th width="200">Table Header</th>
                            <th>Table Header</th>
                            <th width="150">Table Header</th>
                            <th width="150">Table Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Content Goes Here</td>
                            <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
                            <td>Content Goes Here</td>
                            <td>Content Goes Here</td>
                        </tr>
                        <tr>
                            <td>Content Goes Here</td>
                            <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
                            <td>Content Goes Here</td>
                            <td>Content Goes Here</td>
                        </tr>
                        <tr>
                            <td>Content Goes Here</td>
                            <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
                            <td>Content Goes Here</td>
                            <td>Content Goes Here</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
  }
};