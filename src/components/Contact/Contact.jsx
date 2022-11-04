import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-heading">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>

      <form className="contact-form">
        <div className="contact-form-group">
          <label htmlFor="first_name" className="contact-form-label">
            First name
          </label>
          <input
            type="text"
            required
            id="first_name"
            placeholder="Enter your first name"
            className="contact-form-input contact-form-input__input"
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="last_name" className="contact-form-label">
            Last name
          </label>
          <input
            type="text"
            required
            id="last_name"
            placeholder="Enter your last name"
            className="contact-form-input contact-form-input__input"
          />
        </div>

        <div className="contact-form-group contact-form-group__max-width">
          <label htmlFor="email" className="contact-form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="yourname@email.com"
            className="contact-form-input contact-form-input__input"
          />
        </div>

        <div className="contact-form-group contact-form-group__max-width">
          <label htmlFor="message" className="contact-form-label">
            Message
          </label>
          <textarea
            id="message"
            required
            style={{ resize: 'none' }}
            className="contact-form-input contact-form-input__textarea"
            placeholder="Send me a message and I'll reply as soon as possible"
          ></textarea>
        </div>

        <div className="contact-form-group contact-form-group__max-width contact-form-group__condition">
          <input type="checkbox" id="condition-input" required />
          <label htmlFor="condition-input" id="condition-label">
            You agree to providing your data to (name) who may contact you.
          </label>
        </div>

        <button
          type="submit"
          id="btn__submit"
          className="contact-form-group__max-width"
        >
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
