import React from "react";

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About Our Company</h6>
              <p className="text-justify">
                A Unique B2B Platform for Mobile Retailers, Wholesalers, and
                Distributors. With over two decades of experience, our founders
                are mobile industry experts
              </p>
              <i className="fa fa-phone"></i> <a href=""> +91 87008 91736</a>
              <br />
              <i className="fa fa-envelope"></i>{" "}
              <a href=""> support@dealsdray.com</a>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Company</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    Our Company
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">
                    FOS App Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">Blog</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Connect with us</h6>

              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; DealsDray Online Pvt. Ltd. 2023. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
