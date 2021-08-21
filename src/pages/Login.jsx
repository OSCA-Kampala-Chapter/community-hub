import React from "react";
import Layout from "../layout/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email Address
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" />
              </div>
              <div className="mb-3 d-grid">
                <button className="btn btn-primary py-3">LOGIN</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-danger">
              {" "}
              For Authorized Personnel Only
            </div>
            <div className="card-body">
              Please use email & password provided by system administrator.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
