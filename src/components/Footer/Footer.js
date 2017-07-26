import React from 'react';
import './Footer.css';
const Footer = () => {
    
    return (
        <div>
            <footer className="footer is-primary">

                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="column has-text-right">
                            <a href="#" className="icon">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;