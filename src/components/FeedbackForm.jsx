import React, { useState } from "react";

const FeedbackForm = () => {
  const [ref, setRef] = useState("");
  const [status, setStatus] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const complaint = JSON.parse(localStorage.getItem("complaint"));
    if (ref == complaint.refId) {
      setStatus(`Complaint is currently on ${complaint.status} level. Please be patient as we review your complaint.`);
    }
  };
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6">
          <form action="" onSubmit={submit}>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Paste Reference ID to get feedback:
              </label>
              <input
                type="text"
                placeholder="Reference ID"
                className="form-control"
                onChange={(e) => setRef(e.target.value)}
              />
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-primary py-3">CONFIRM IDENTITY</button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Complaint Feedback Status</div>
            <div className="card-body">
                {status}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
