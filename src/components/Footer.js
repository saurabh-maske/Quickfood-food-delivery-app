import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
     
            <div className="container-fluid pt-5 bg-footer">
               
                 <div className="container">
                    <div className="center col-12 footer-copyright ">
                        <p>© 2020 Gery Food. All Rights Reserved. Powered By <span style={{ color: "orange", fontWeight: 700 }}>Saurabh Maske</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;