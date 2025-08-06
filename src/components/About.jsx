import React, { useState } from "react";

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am final year student with a passion for Full Stack Development,
          I've cultivated a passion for solving real-world problems through
          code.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">My Projects</h3>

        <ul className="service-list">
          <li className="service-item">
            <a
              href="https://intrend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/shipwheel.png"
                    alt="mobile app icon"
                    width="50"
                  />
                  <h4 className="h4 service-item-title">CaptainPost</h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text">
                    Automatate your youtube posts and market you content with
                    built in email marketing feature
                  </p>
                </div>
              </div>
            </a>
          </li>

          <li className="service-item">
            <a
              href="https://omm-pani-blogs.hashnode.dev/how-i-built-my-own-llm-from-scratch-a-students-deep-dive-into-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/ai.png"
                    alt="mobile app icon"
                    width="45"
                  />
                  <h4 className="h4 service-item-title">LLM from Scratch</h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text">
                    Coded and Pretrained a LLM from scratch using GPT-2 weights.
                    Finetuned the model to create a personal assistant and an
                    email spam classifier
                  </p>
                </div>
              </div>
            </a>
          </li>

          <li className="service-item">
            <a
              href="https://exchange.omm-codes.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/candlestick-chart.png"
                    alt="mobile app icon"
                    width="45"
                  />
                  <h4 className="h4 service-item-title">Crypto Exchange</h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text">
                    Built a real-time scalable crypto exchange with order
                    matching, Redis-based pub/sub, WebSocket updates, and
                    time-series trade data storage.
                  </p>
                </div>
              </div>
            </a>
          </li>

          <li className="service-item">
            <a
              href="https://zap.d-code.in.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/workflow.png"
                    alt="mobile app icon"
                    width="45"
                  />
                  <h4 className="h4 service-item-title">Automate workflows</h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text">
                    Built a tool to automate workflows such as sending emails
                    and transferring money using custom triggers and actions.
                  </p>
                </div>
              </div>
            </a>
          </li>

          <li className="service-item">
            <a
              href="http://walletpay.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/wallet.png"
                    alt="Web development icon"
                    width="40"
                  />
                  <h4 className="h4 service-item-title">WalletPay</h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text">
                    An app that enables users to add money to their wallet and
                    send money to other users.
                  </p>
                </div>
              </div>
            </a>
          </li>

          <li className="service-item">
            <a
              href="https://the-blogger-blue.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/blog.png"
                    alt="design icon"
                    width="40"
                  />
                  <h4 className="h4 service-item-title">Blogger-Blue</h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text">
                    A blogging app that allows users to write blogs and share
                    them with others.
                  </p>
                </div>
              </div>
            </a>
          </li>

          <li className="service-item">
            <a
              href="https://chess-royale.d-code.in.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/horse.png"
                    alt="camera icon"
                    width="40"
                  />
                  <h4 className="h4 service-item-title">ChessMate</h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text">
                    A chess app that allows users to play with friends and other
                    players.
                  </p>
                </div>
              </div>
            </a>
          </li>

          <li className="service-item">
            <a
              href="https://omm-pani-blogs.hashnode.dev/building-an-http-server-from-scratch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/http.png"
                    alt="mobile app icon"
                    width="45"
                  />
                  <h4 className="h4 service-item-title">
                    HTTP Server from scratch
                  </h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text">
                    Built a custom HTTP server from the ground up, handling
                    routing, request parsing, and response generation without
                    using any frameworks.
                  </p>
                </div>
              </div>
            </a>
          </li>

          <li className="service-item">
            <a
              href="https://digi-yatrs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/face-recognition.png"
                    alt="mobile app icon"
                    width="45"
                  />
                  <h4 className="h4 service-item-title">
                    Automatic face scanner
                  </h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text"></p>
                </div>
              </div>
            </a>
          </li>

          <li className="service-item">
            <a
              href="https://og-image-generator-rouge.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="service-content">
                <div className="service-content-header">
                  <img
                    src="/assets/images/preview.png"
                    alt="mobile app icon"
                    width="45"
                  />
                  <h4 className="h4 service-item-title">OG: Image Generator</h4>
                </div>

                <div className="service-content-box">
                  <p className="service-item-text"></p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default About;
