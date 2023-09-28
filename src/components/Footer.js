/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../css/footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-top">
        <div className="signup-section">
            <section className='sign'>
                <h3>Subscribe to Aesop communications</h3>
                <div className="footer-divider"></div>
                <div className="list-block">
                    <input className="emailinp" placeholder='Email address' />
                    <div className="checkbox-module">
                        <input type="checkbox"/>
                        <label><p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p></label>
                    </div>
                </div>
            </section>

        </div>

        <section className="order-and-support">
            <h3>Orders & Support</h3>
            <div className="footer-divider"></div>
            <ul className="list-item">
                <li><a href="#">Contact us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">Terms and Conditions</a></li>
            </ul>
        </section>

        <section className="services">
            <h3>Services</h3>
            <div className="footer-divider"></div>
            <ul className="list-item">
                <li><a href="#">Live Assistance</a></li>
                <li><a href="#">Corporate gifts</a></li>
                <li><a href="#">Facial Appointments</a></li>
                <li><a href="#">Click and Collect</a></li>
                <li><a href="#">Video Consultation</a></li>
            </ul>
        </section>

        <section className="location">
            <h3>Location Preferences</h3>
            <div className="footer-divider"></div>
            <div>
                <ul className="list-item">
                    <li>
                        <span>Shipping :</span>
                        <button className="footer-btn"><p>Hong Kong SAR, China</p></button>
                    </li>
                        
                    <li>
                        <span>Language :</span>
                        <ul className="list-item">
                            <li>繁體中文</li>
                            <li>English</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>

        <section className="sustainability">
            <h3>Sustainability</h3>
            <div className="footer-divider"></div>
            <div className="list-text">
                <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. </p>
            </div>
        </section>

        <section className="about">
            <h3>About</h3>
            <div className="footer-divider"></div>
            <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Foundation</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Cookie Policy</a></li>
            </ul>
        </section>

        <section className="social">
            <h3>Social</h3>
            <div className="footer-divider"></div>
            <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">WeChat</a></li>
                <li><a href="#">Weibo</a></li>
            </ul>
        </section>
    </div>

    <div className="footer-bottom">
        <span>©   Aesop</span>
    </div>
    </div>
  );
};
export default Footer;
