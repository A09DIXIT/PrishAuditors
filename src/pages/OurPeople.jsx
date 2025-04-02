import React from "react";

const OurPeople = () => {
  return (
    <>
      <section className="about-five p-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="image-box position-relative">
                <div className="shape position-absolute">
                  <div
                    className="w-36 h-36 bg-cover"
                    style={{ backgroundImage: "url(https://www.stuaham.com/public/images/shape/shape-66.png)" }}
                  ></div>
                  <div
                    className="w-36 h-36 bg-cover"
                    style={{ backgroundImage: "url(https://www.stuaham.com/public/images/shape/shape-77.png)" }}
                  ></div>
                </div>
                <figure>
                  <img
                    src="https://www.stuaham.com/upload/our_mission/c766bf70c7289e238e985368e4e9ee1e.jpg"
                    alt="Our Mission"
                    className="rounded-lg"
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-box ml-4 mr-4">
                <h2 className="text-2xl font-bold">
                  To optimize our Vision, we would be guided by the core values
                </h2>
                <ul className="list-none mt-3">
                  <li className="font-bold">We create Insight</li>
                  <li className="font-bold">We work as a Team</li>
                  <li className="font-bold">We Care for our Clients</li>
                  <li className="font-bold">We Act with Integrity</li>
                  <li className="font-bold">We Invest in Talent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-five p-5 bg-gray-800 text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h4>STUART & HAMLYN</h4>
              <div className="social-icons mt-3 flex space-x-4">
                <a href="https://www.facebook.com/dubaicharteredaccountants/" target="_blank">Facebook</a>
                <a href="https://twitter.com/stuahamuae" target="_blank">Twitter</a>
                <a href="https://www.linkedin.com/company/stuart-hamlyn-chartered-accountants/" target="_blank">LinkedIn</a>
                <a href="https://www.instagram.com/dubaicharteredaccountants/" target="_blank">Instagram</a>
                <a href="https://www.youtube.com" target="_blank">YouTube</a>
              </div>
            </div>
            <div className="col-lg-3">
              <h4>Quick Links</h4>
              <ul className="mt-3">
                <li><a href="https://www.stuaham.com/about.html">About Us</a></li>
                <li><a href="https://www.stuaham.com/news.html">News</a></li>
                <li><a href="https://www.stuaham.com/blog.html">Blog</a></li>
                <li><a href="https://www.stuaham.com/contact.html">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4>Services</h4>
              <ul className="mt-3">
                <li><a href="https://www.stuaham.com/services/audit-&-assurance">Audit & Assurance</a></li>
                <li><a href="https://www.stuaham.com/services/taxation">Taxation</a></li>
                <li><a href="https://www.stuaham.com/services/transfer-pricing">Transfer Pricing</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4>Join Us & Increase Your Business</h4>
              <form action="https://www.stuaham.com/newsletter/save.html" method="post">
                <input type="email" name="email" placeholder="Your email address" className="p-2" />
                <button type="submit" className="bg-blue-500 p-2 ml-2">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">&copy; 2025 STUART & HAMLYN. All Rights Reserved.</div>
      </footer>
    </>
  );
};

export default Ourpeople;