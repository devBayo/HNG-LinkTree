import './Contact.css';
import Form from '../components/Form/Form';

const Contact = props => {
  return (
    <section className="contact">
      <div className="contact-heading">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
      </div>

      <Form fullname={props.fullname} />
    </section>
  );
};

export default Contact;
