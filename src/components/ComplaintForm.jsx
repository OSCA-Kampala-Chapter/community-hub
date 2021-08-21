import React, { useState } from "react";
import Swal from "sweetalert2";
import { validNin } from "../utils/validateNin";

const ComplaintForm = () => {
  const [nin, setNin] = useState("");
  const [category, setCategory] = useState("");
  const [complaint, setComplaint] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const complaintId = Math.random().toString(36).substring(7);
    if (!validNin.test(nin)) {
      Swal.fire("Are you sure that is your NIN?", "", "warning");
    }
    if (nin.length < 10) {
      Swal.fire("That can not be a valid NIN come on!", "", "warning");
    }
    if (validNin.test(nin)) {
      const formData = {
        refId: complaintId,
        nin: nin,
        category: category,
        complaint: complaint,
        status: "submitted",
      };
      localStorage.setItem("complaint", JSON.stringify(formData));
      Swal.fire({
        title: "Thank you for your complaint!",
        text: `We will be in touch soon. You can also use the reference ID ${complaintId}`,
        type: "success",
        showCancelButton: true,
        confirmButtonText: "Ok",
        closeOnConfirm: true,
      });
    }
    setCategory("");
    setComplaint("");
    setNin("");
  };

  return (
    <>
      <form action="" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            National Identification Number
          </label>
          <input
            type="text"
            className="form-control"
            maxLength="14"
            required
            onChange={(e) => setNin(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Choose Category
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            <option defaultValue>Select category</option>
            <option value="transportation">Transportation</option>
            <option value="agriculture">Agriculture</option>
            <option value="water">Water</option>
            <option value="electricity">Electricity</option>
            <option value="health">Health</option>
            <option value="security">Security</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Enter complaint
          </label>
          <textarea
            required
            name=""
            className="form-control"
            onChange={(e) => setComplaint(e.target.value)}
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="mb-3 d-grid">
          <button className="btn btn-primary py-3" type="submit">
            SUBMIT COMPLAINT
          </button>
        </div>
      </form>
    </>
  );
};

export default ComplaintForm;
