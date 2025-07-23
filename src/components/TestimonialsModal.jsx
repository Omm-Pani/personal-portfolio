import React, { useEffect, useRef } from 'react';

function TestimonialsModal({ isOpen, onClose, testimonial }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-container active" data-modal-container ref={modalRef}>
      <div className="overlay active" data-overlay onClick={onClose}></div>

      <section className="testimonials-modal">
        <button className="modal-close-btn" data-modal-close-btn onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              width="80"
              data-modal-img
            />
          </figure>

          <img src="/assets/images/icon-quote.svg" alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title" data-modal-title>{testimonial.name}</h4>

          <time dateTime={testimonial.date}>{testimonial.dateFormatted}</time>

          <div data-modal-text>
            <p>{testimonial.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialsModal;