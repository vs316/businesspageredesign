import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Footer from "../../components/footer";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fqrm4on",
      "template_o3yuyyh",
      form.current,
      "vGZr1e276SZhr830X"
    );
    e.target.reset();
  };
  return (
    <section id="contact" className="contact__main">
      <div className="before-contact">
        <h1>CONTACT US</h1>
      </div>
      <br />
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ssventerprises015@gmail.com</h5>
            <a
              href="mailto:ssventerprises015@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn sm">Send a message</button>
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 44485 60424</h5>
            <a href="tel:+914448560424" target="_blank" rel="noreferrer">
              <button className="btn sm">Send a message</button>
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <div className="form-column">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
            </div>
            <br />
            <div className="form-column">
              <input
                type="date"
                name="date"
                placeholder="Select Date"
                required
              />
            </div>
          </div>
          <select name="category" required>
            <option value="" disabled selected>
              Select Category
            </option>
            <option value="Housing Loan">Housing Loan</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Project Fund">Project Fund</option>
            <option value="OD /CC">OD /CC</option>
            <option value="Others">Others</option>
          </select>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <br />
      <Footer />
    </section>
  );
};

export default Contact;
