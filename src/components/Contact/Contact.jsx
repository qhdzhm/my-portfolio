import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((preData) => ({
      ...preData,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="contact section-p">
      <div className="container">
        <div className="contact-content">
          <div className="section-title ">
            <h3 className="text-brown">
              contect <span className="text-dark">me</span>
            </h3>
            <p className="text">
              I offer the right solutions for your digital business
            </p>
          </div>
        </div>

        <form className="contact-form mx-auto" onSubmit={handleSubmit}>
          <div className="form-elem">
            <input
              type="text"
              value={formData.name}
              placeholder="name"
              className="form-control"
              onChange={handleChange}
              id="name"
            />
          </div>
          <div className="form-elem">
            <input
              type="text"
              value={formData.email}
              placeholder="email"
              className="form-control"
              onChange={handleChange}
              id="email"
            />
          </div>
          <div className="form-elem">
            <textarea
              rows={2}
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="message"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="bg-brown text-white submit-btn fw-3 fs-22">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
