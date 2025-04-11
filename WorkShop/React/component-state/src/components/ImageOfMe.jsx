import React from 'react'

function ImageOfMe() {
  return (
    <>
        {/* Images of Me */}
        <div className="w3-row-padding w3-padding-16" id="about">
            <div className="w3-col m6">
              <img
                src="/w3images/avatar_g.jpg"
                alt="Me"
                style={{ width: "100%" }}
              />
            </div>
            <div className="w3-col m6">
              <img src="/w3images/me2.jpg" alt="Me" style={{ width: "100%" }} />
            </div>
          </div>
          <div
            className="w3-container w3-padding-large"
            style={{ marginBottom: 32 }}
          >
            <h4>
              <b>About Me</b>
            </h4>
            <p>
              Just me, myself and I, exploring the universe of unknownment. I
              have a heart of love and an interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you. Praesent
              tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
              lectus vitae, ultricies congue gravida diam non fringilla.
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
            <hr />
            <h4>Technical Skills</h4>
            {/* Progress bars / Skills */}
            <p>Photography</p>
            <div className="w3-grey">
              <div
                className="w3-container w3-dark-grey w3-padding w3-center"
                style={{ width: "95%" }}
              >
                95%
              </div>
            </div>
            <p>Web Design</p>
            <div className="w3-grey">
              <div
                className="w3-container w3-dark-grey w3-padding w3-center"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
            <p>Photoshop</p>
            <div className="w3-grey">
              <div
                className="w3-container w3-dark-grey w3-padding w3-center"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
            <p>
              <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
                <i className="fa fa-download w3-margin-right" />
                Download Resume
              </button>
            </p>
            <hr />
            <h4>How much I charge</h4>
            {/* Pricing Tables */}
            <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
              <div className="w3-third w3-margin-bottom">
                <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
                  <li className="w3-padding-16">Web Design</li>
                  <li className="w3-padding-16">Photography</li>
                  <li className="w3-padding-16">1GB Storage</li>
                  <li className="w3-padding-16">Mail Support</li>
                  <li className="w3-padding-16">
                    <h2>$ 10</h2>
                    <span className="w3-opacity">per month</span>
                  </li>
                  <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </div>
              <div className="w3-third w3-margin-bottom">
                <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li className="w3-teal w3-xlarge w3-padding-32">Pro</li>
                  <li className="w3-padding-16">Web Design</li>
                  <li className="w3-padding-16">Photography</li>
                  <li className="w3-padding-16">50GB Storage</li>
                  <li className="w3-padding-16">Endless Support</li>
                  <li className="w3-padding-16">
                    <h2>$ 25</h2>
                    <span className="w3-opacity">per month</span>
                  </li>
                  <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </div>
              <div className="w3-third">
                <ul className="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
                  <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
                  <li className="w3-padding-16">Web Design</li>
                  <li className="w3-padding-16">Photography</li>
                  <li className="w3-padding-16">Unlimited Storage</li>
                  <li className="w3-padding-16">Endless Support</li>
                  <li className="w3-padding-16">
                    <h2>$ 25</h2>
                    <span className="w3-opacity">per month</span>
                  </li>
                  <li className="w3-light-grey w3-padding-24">
                    <button className="w3-button w3-teal w3-padding-large w3-hover-black">
                      Sign Up
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    </>
  )
}

export default ImageOfMe