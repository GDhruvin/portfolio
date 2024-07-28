import React from "react";
import github from "./github.png";
import linkedin from "./linkedin.png";
import gmaillogo from "./gmail-logo.png";
import phonecall from "./phone-call.png";
const resume =
  "https://drive.google.com/file/d/1glUcx9ny6sniQHw-k69f8npgnoIc4S1G/view?usp=sharing";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 intro">
                  <h1 className="brand-title">
                    It's <strong className="brand-name">Dhruvin Gabani</strong>
                  </h1>
                  <h2 className="my-3">
                    I am IT Student at Silver Oak University
                  </h2>
                  <h5>
                    <img
                      src={gmaillogo}
                      alt=""
                      srcset=""
                      width="20px"
                      height="20px"
                    />{" "}
                    : gabanidhruvin30@gmail.com
                  </h5>
                  <h5>
                    <img
                      src={phonecall}
                      alt=""
                      srcset=""
                      width="20px"
                      height="20px"
                    />{" "}
                    : 8799300227
                  </h5>

                  <div className="mt-3" style={{ display: "flex" }}>
                    <a
                      href={resume}
                      className="btn-get-started"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resume
                    </a>
                    <a href="https://github.com/GDhruvin" target="_blank" rel="noopener noreferrer">
                      {" "}
                      <img
                        src={github}
                        alt=""
                        srcset=""
                        width="50px"
                        height="50px"
                      />{" "}
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dhruvin-gabani-653863223/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <img
                        src={linkedin}
                        alt=""
                        srcset=""
                        width="50px"
                        height="50px"
                      />
                    </a>
                  </div>
                </div>

                {/* <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={profile} className='img-fluid animated' alt='home image' height="300px" width="300px" />
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
</>
  );
};

export default Home;
