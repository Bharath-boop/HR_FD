import React from "react";

function Footer() {
  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About Our Company</h6>
              <p class="text-justify">
                A Unique B2B Platform for Mobile Retailers, Wholesalers, and
                Distributors. With over two decades of experience, our founders
                are mobile industry experts
              </p>
              <i class="fa fa-phone"></i> <a href=""> +91 87008 91736</a>
              <br />
              <i class="fa fa-envelope"></i>{" "}
              <a href=""> support@dealsdray.com</a>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Company</h6>
              <ul class="footer-links">
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

            <div class="col-xs-6 col-md-3">
              <h6>Connect with us</h6>

              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <i class="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
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
