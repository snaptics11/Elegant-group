import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="footer bg-primary text-white py-4" >
            <div className="container" >
                <div className="row" >
                    <div className="col-md-2" style={{marginTop: '20px'}}>
                        <div className="logo-section">
                            <div className="logo-box">
                                <img src={logo} alt="Logo" style={{ height: '50px' }} className="img-fluid" />
                            </div>
                            <div className="follow-us mt-2" style={{ textAlign: 'center'  }}>
                                <h6>Follow Us</h6>
                                <div className="social-icons" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                    <a href="https://www.facebook.com/myelegantgroup" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/myelegantgroupofficial/" className="social-icon"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/@myelegantgroup" className="social-icon"><i className="fab fa-youtube"></i></a>
                                    <a href="https://www.linkedin.com/company/myelegantgroup/" className="social-icon"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" style={{marginTop: '20px'}}>
                        <h6>Address</h6>
                        <p>
                            7th Floor, Block 2, My Home Hub, <br />
                            Madhapur, Patrika Nagar, HITEC City, <br />
                            Hyderabad
                        </p>
                    </div>
                    <div className="col-md-2" style={{marginTop: '20px'}}>
                        <h6>Sitemap Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About">About Us</a></li>
                            <li><a href="#Highlights">Projects Highlights</a></li>
                            <li><a href="#Gallery">Gallery</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2" style={{marginTop: '20px'}}>
                        <h6>Other Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#Amenities">Amenities</a></li>
                            <li><a href="#location-highlights">Location Highlights</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3" style={{marginTop: '20px'}}>
                    <h6>Contact Us</h6>
                    <ul className="list-unstyled">
                    <li><i className="fas fa-phone-alt"></i> 
                    : +91 9966764646</li>
                    {/* <li><i className="bi bi-envelope-fill"></i>:   info@myelegantgroup.com</li> */}
                    </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p>&copy; 2025 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;