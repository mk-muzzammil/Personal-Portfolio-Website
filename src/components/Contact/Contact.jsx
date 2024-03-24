import React, { useState, useRef, useContext } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../context";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oxzzaqe", "template_za8ya7p", form.current, {
        publicKey: "HNC4JzkvtRftsDV0h",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setDone(false);
        }
      );
  };
  return (
    <div className="contact-wrapper" id="Contact">
      <div className="contact-left">
        <span style={{ color: darkMode ? "white" : "" }}>Get In Touch</span>
        <span>Contact Me</span>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail} className="formCon">
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name.."
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email.."
          />

          <textarea
            name="message"
            id="messageArea"
            className="user"
            cols="30"
            rows="6"
            placeholder="Message.."
          ></textarea>

          <input type="submit" value="Send" className="button form-btn" />
          <span>{done && "Thanks for contacting me ..."}</span>

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
