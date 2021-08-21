import React from "react";
import { CardList, Files, InboxesFill } from "react-bootstrap-icons";
import ComplaintForm from "../components/ComplaintForm";
import FeedbackForm from "../components/FeedbackForm";
import Layout from "../layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            <CardList /> Complaints
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <InboxesFill /> Feedback
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="row mt-4">
            <div className="col-md-6">
              <ComplaintForm />
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">How to Use</div>
                <div className="card-body">
                  Describe your complaint in the field provided. You will
                  receive a reference ID. Copy and store it. Use the ID in the
                  Feedback tab to get feedback from an officer in charge.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <FeedbackForm />
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
