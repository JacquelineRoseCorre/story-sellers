import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-page">
      <div className="background">
        <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#333"
            d="M0 0h1440v800H0z"
          />
          <path
            fill="#fff"
            d="M0 0l720 400L1440 0H0z"
          />
          <path
            fill="#fff"
            d="M720 400l720-400H720z"
          />
        </svg>
      </div>
      <div className="container">
        <h1>Get in Touch</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-field message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

