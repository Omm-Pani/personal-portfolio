import React, { useState, useRef } from "react";
// import emailjs from '@emailjs/browser';
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function Contact() {
  const form = useRef();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showToast = (msg, type) => {
    let backgroundColor;
    if (type === "success") {
      backgroundColor = "linear-gradient(to right, #FDC663, #ffc371)";
    } else if (type === "error") {
      backgroundColor = "linear-gradient(to right, #FDC663, #ffc371)";
    }

    Toastify({
      text: msg,
      duration: 3000,
      id: "send",
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: backgroundColor,
        borderRadius: "0px 0px 5px 5px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        color: "#030303",
        fontSize: "18px",
        maxWidth: "60%",
        padding: "10px 20px",
        wordBreak: "break-word",
        margin: "0 auto",
        textAlign: "center",
      },
      className: "toastify-fixed",
    }).showToast();
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!fullname || !email || !message) {
      showToast("Please fill in all fields.", "error");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      showToast("Please enter a valid email address.", "error");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_f5uprrr",
        "template_3rtsvnp",
        form.current,
        "xLHttFLEiXnrDqyje"
      )
      .then(
        (result) => {
          showToast("Message sent successfully!", "success");
          console.log(result.text);
          setFullname("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          showToast("Failed to send message!", "error");
          console.log(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              id="sender_fullname"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            <input
              type="email"
              id="sender_email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            name="message"
            id="sender_message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            id="send_btn"
            className="form-btn"
            type="submit"
            disabled={loading}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span id="btn_text">{loading ? "Sending..." : "Send Message"}</span>
            {loading && <div id="loader" className="loader"></div>}
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
