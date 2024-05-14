import React from "react";
import "./contactusForm.css";

export default function ContactUsForm() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
              Contact
            </p>
            <h1 className="display-5 mb-4">
              If You Have Any Query, Please Contact Us
            </h1>
            <p className="mb-4">
              Get in touch with our team today to understand your situation and
              we’ll connect you with the right advisor who will create a
              comprehensive financial plan to help you reach your goals.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label for="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label for="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label for="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <select
                    id="financial-needs"
                    class="form-select form-select mb-3"
                    name="financial needs"
                    aria-label="financial needs"
                  >
                    <option disabled="" value="">
                      Please select you financial needs
                    </option>
                    <option value="Financial Planning">
                      Financial Planning
                    </option>
                    <option value="Investment Management">
                      Investment Management
                    </option>
                    <option value="Retirement Planning">
                      Retirement Planning
                    </option>
                    <option value="Guidance Around Estate Planning">
                      Guidance Around Estate Planning
                    </option>
                    <option value="Guidance on Tax Management">
                      Guidance on Tax Management
                    </option>
                    <option value="Business Ownership and Succession Planning">
                      Business Ownership and Succession Planning
                    </option>
                    <option value="Charitable Giving">Charitable Giving</option>
                    <option value="Family Office Services">
                      Family Office Services
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <p>Choose your suiatble days to call back:</p>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="weekdays"
                    />
                    <label class="form-check-label" for="weekdays">
                      Weekdays
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="weekend"
                    />
                    <label class="form-check-label" for="weekend">
                      Weekend
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <p>Please select type of meeting</p>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      In Person
                    </label>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    >
                      Virtual
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <p>Please select type of contact</p>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="financialAdvisor"
                      value="option1"
                    />
                    <label class="form-check-label" for="financialAdvisor">
                      Financial Advisor
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="virtualAdvisor"
                      value="option2"
                    />
                    <label class="form-check-label" for="virtualAdvisor">
                      Virtail Advisor
                    </label>
                  </div>
                </div>

              

                <div className="col-12">
                  <button className="btn btn-primary py-3 px-5" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            className="col-lg-6 wow fadeIn"
            data-wow-delay="0.5s"
            style={{ minHeight: "450px" }}
          >
            <div className="position-relative rounded overflow-hidden h-100">
              <iframe
                className="position-relative w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0"
                style={{ minHeight: "450px", border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <p className="mt-5"> Please click on below QR code</p>
          <a href="/" id="bottle" className="w-auto">
            <img
              className="img-fluid rounded"
              src="img/qr-code.png"
              width={200}
              height={200}
              alt="Scan the QR code or visit the home page"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
