import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import flag from "../assets/flag.png"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container pt-3 mb-5">
            <div className="d-flex justify-content-end px-5 mb-3">
                <img src={flag} alt="" style={{ width: '30px' }} />
            </div>
        <Navbar />
        <div className="my-4">
          <hr style={{ backgroundColor: "lightgrey" }} />
        </div>
        <main style={{ minHeight: '300px' }}>
        {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
