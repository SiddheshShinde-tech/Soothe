import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Menu</h4>
              <ul className="list-unstyled">
                <li>About</li>
                <li>Blog</li>
                <li>Games</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="col">
              <h4>Follow us</h4>
              <ul className="list-unstyled"></ul>
              <i class="social-icon fab fa-twitter"></i>
              <i class="social-icon fab fa-facebook"></i>
              <i class="social-icon far fa-envelope"></i>
              <i class="social-icon fab fa-instagram"></i>
            </div>
            <div className="col">
              <h4>Signed up?</h4>
              <ul className="list-unstyled">
                <button type="button" class="btn btn-outline-info btn-sm">
                  Login
                </button>
              </ul>
            </div>
            <div className="col">
              <h4>Support</h4>
              <ul className="list-unstyled">
                <li>help@soothe.com</li>
                <li>(011)12345678</li>
              </ul>
            </div>
          </div>
          {/* <hr /> */}
        </div>
      </div>
      <div className="footer2">
        <div className="container">
          <div className="Footer-icon">
            <div className="row">
              <h1>Soothe</h1>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm ">Copyright © Soothe | All right reserved.</p>
            <p> Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
