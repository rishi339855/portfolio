import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe,
  FaPaperPlane,
  FaUser,
  FaAt,
  FaComment,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        "service_eg9zldf", // Replace with your EmailJS service ID
        "template_z2ray47", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Dadam Rishikesh Reddy", // Replace with your name
        },
        "Em-1JnRcBl5CkirnQ" // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact">
      <div className="content">
        <h2>Contact Me</h2>
        <div className="contact-container">
          {/* Left Side: Contact Details */}
          <div className="contact-details-card">
            <h3>Get In Touch</h3>
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <ul className="contact-info-list icon-only">
              <li>
                <a href="tel:+91 7036239272" aria-label="Phone">
                  <FaPhone />
                </a>
              </li>
              <li>
                <a href="mailto:rishikeshreddy887@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dadam-rishikesh-reddy-1318b827a/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rishi339855"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="location-item">
                <FaMapMarkerAlt />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-card">
            <h3>Send Me a Message</h3>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.type === "success" ? (
                  <FaCheckCircle style={{ marginRight: "8px" }} />
                ) : (
                  <FaExclamationCircle style={{ marginRight: "8px" }} />
                )}
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FaAt /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">
                  <FaComment /> Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <FaPaperPlane /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
